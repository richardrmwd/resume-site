import React from 'react';

const SiteHeader: React.FC = () => {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to download the PDF');
      return;
    }

    const doc = printWindow.document;
    
    // Copy relevant head elements (styles, Tailwind, fonts)
    // We filter out app-specific scripts to avoid re-running React logic in the static view
    const headNodes = Array.from(document.head.children).filter(node => {
      const tagName = node.tagName.toLowerCase();
      // Keep all links (fonts, icons) and styles
      if (tagName === 'link' || tagName === 'style') return true;
      // Keep Tailwind script and config
      if (tagName === 'script') {
        const src = (node as HTMLScriptElement).src;
        const content = node.innerHTML;
        if (src && src.includes('tailwindcss')) return true;
        if (content && content.includes('tailwind.config')) return true;
        return false;
      }
      return false;
    });

    const headHTML = headNodes.map(node => node.outerHTML).join('\n');
    const content = document.getElementById('root')?.innerHTML || '';

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Richard Daly - Resume</title>
        ${headHTML}
        <style>
          /* Base clean styling for the preview window */
          body { 
            background: white !important; 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
          
          /* Hide the navigation header in this view */
          header.sticky { display: none !important; }
          
          /* Ensure the content is centered for the on-screen preview */
          #root { 
            max-width: 720px; 
            margin: 0 auto; 
            padding: 2rem 1.5rem; 
          }

          /* Print overrides */
          @media print {
            @page { margin: 0.35in 0.5in; }
            body { margin: 0; padding: 0; background: white !important; }
            #root { 
              max-width: none; 
              padding: 0; 
              margin: 0; 
            }
            /* Prevent awkward page breaks */
            section, article {
              break-inside: avoid;
              page-break-inside: avoid;
            }
          }
        </style>
      </head>
      <body class="bg-white text-primary font-sans antialiased">
        <div id="root">
          ${content}
        </div>
        <script>
          // Wait for Tailwind and fonts to load
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 500);
          };
        </script>
      </body>
      </html>
    `);
    doc.close();
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-border-light print:hidden">
      <div className="max-w-[720px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a 
          href="#" 
          className="font-bold text-[1.1rem] text-primary no-underline tracking-tighter hover:text-gray-700"
        >
          Richard Daly
        </a>
        <nav className="flex items-center gap-5 flex-wrap">
          <a 
            href="https://www.linkedin.com/in/richardwdaly/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-subtext hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://amdgsystems.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-subtext hover:text-primary transition-colors"
          >
            AMDG
          </a>
          <a 
            href="https://emilyhelps.ie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-subtext hover:text-primary transition-colors"
          >
            Emily Helps
          </a>
          <button 
            type="button" 
            onClick={handlePrint}
            className="text-sm text-subtext hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            Download PDF
          </button>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;