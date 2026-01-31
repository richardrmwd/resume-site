import React from 'react';

const ResumeHeader: React.FC = () => {
  return (
    <header className="mb-10 print:mb-4 print:border-b print:border-[#333] print:pb-2">
      <h1 className="m-0 mb-1 text-3xl font-bold tracking-tight leading-tight print:text-2xl">
        Richard W. Daly
      </h1>
      <p className="m-0 mb-2 text-base text-[#666] print:text-[10pt]">
        Waterford, Ireland & PA, USA
      </p>
      
      {/* Contact Info */}
      <div className="mb-2 text-[0.95rem] flex flex-wrap items-center gap-x-4 gap-y-1 print:text-[10pt]">
        <a href="mailto:richardrmwd@gmail.com" className="text-link hover:underline print:text-[#166] decoration-0">
          richardrmwd@gmail.com
        </a>
        <span className="text-subtext print:text-primary">+353 (85) 740 2298</span>
        <span className="text-subtext print:text-primary">+1 (602) 632 6870</span>
      </div>

      {/* Screen Links */}
      <nav className="mt-2 text-[0.9rem] print:hidden">
        <a 
          href="https://www.linkedin.com/in/richardwdaly/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-link hover:underline mr-4"
        >
          LinkedIn
        </a>
        <a 
          href="https://amdgsystems.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-link hover:underline mr-4"
        >
          amdgsystems.com
        </a>
        <a 
          href="https://emilyhelps.ie" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-link hover:underline mr-4"
        >
          emilyhelps.ie
        </a>
      </nav>

      {/* Print Links */}
      <p className="hidden print:block mt-1 text-xs text-[#166]">
        LinkedIn · amdgsystems.com · emilyhelps.ie
      </p>
    </header>
  );
};

export default ResumeHeader;