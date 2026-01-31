import React from 'react';

interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  location?: string;
  children: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, date, location, children }) => {
  return (
    <article className="mb-8 pb-8 border-b border-border-light last:border-b-0 last:mb-0 last:pb-0 print:mb-2 print:pb-0 print:border-none break-inside-avoid">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2 print:mb-1">
        <h3 className="m-0 text-[1.1rem] font-semibold tracking-tight print:text-[0.95rem]">
          {role}
        </h3>
        <span className="font-medium text-[0.95rem] text-subtext print:text-[0.9rem]">
          {company}
        </span>
        {location && (
          <span className="text-[0.9rem] text-meta print:text-[0.9rem]">
            {location}
          </span>
        )}
        <span className="ml-auto text-[0.9rem] text-meta print:text-[0.9rem]">
          {date}
        </span>
      </div>
      <ul className="m-0 pl-5 list-disc text-[0.95rem] text-[#444] space-y-1.5 print:text-[9.5pt] print:space-y-0.5">
        {children}
      </ul>
    </article>
  );
};

export default ExperienceItem;