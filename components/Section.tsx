import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
  return (
    <section className={`mb-8 print:mb-3 break-inside-avoid ${className}`}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-meta mb-4 print:mb-1.5 print:text-[0.85rem] print:text-[#333] print:border-b print:border-[#ccc] print:pb-[1px]">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;