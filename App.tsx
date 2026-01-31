import React, { useMemo } from 'react';
import SiteHeader from './components/SiteHeader';
import ResumeHeader from './components/ResumeHeader';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';

const App: React.FC = () => {
  // Calculate dynamic years of experience
  const experienceYears = useMemo(() => {
    const start = new Date(2015, 0, 1); // Jan 1, 2015
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    
    // Adjust if current month/day is before start month/day
    if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) {
      years--;
    }
    
    const count = years > 0 ? years : 1;
    return `over ${count} year${count !== 1 ? 's' : ''}`;
  }, []);

  return (
    <>
      <SiteHeader />
      
      <main className="max-w-[720px] mx-auto px-6 py-10 pb-16 print:max-w-none print:p-0 print:font-serif">
        <ResumeHeader />

        <Section title="Summary">
          <p className="text-[1.05rem] leading-relaxed text-[#444] print:text-[10pt]">
            Operations & Strategy Lead and Senior Salesforce Architect with <span id="years-experience">{experienceYears}</span> of experience in digital transformation. I specialize in translating complex business requirements into high-compliance, scalable technical roadmaps. My focus lies in Site Reliability Engineering (SRE), reducing "tech debt," and maximizing platform ROI for global insurers, US State Governments, and mission-driven organizations.
          </p>
        </Section>

        <Section title="Technical Skills">
          <ul className="flex flex-wrap gap-y-2 list-none p-0 m-0">
            <li className="w-full text-[0.95rem] text-[#444] print:text-[10pt]">
              <strong className="text-primary mr-1">Platforms & Cloud:</strong> Salesforce (Architect/Dev), Wix (Velo/CMS), Azure, AWS, Docker, Copado
            </li>
            <li className="w-full text-[0.95rem] text-[#444] print:text-[10pt]">
              <strong className="text-primary mr-1">Development:</strong> Apex, LWC, JavaScript, .Net, Java, SQL, HTML/CSS, REST/SOAP APIs
            </li>
            <li className="w-full text-[0.95rem] text-[#444] print:text-[10pt]">
              <strong className="text-primary mr-1">Compliance & Ops:</strong> GDPR, HIPAA, SRE Principles, DevOps, Project Governance
            </li>
            <li className="w-full text-[0.95rem] text-[#444] print:text-[10pt]">
              <strong className="text-primary mr-1">Architecture:</strong> System Integration, Data Modeling, License Minimization, Multi-tenant Architecture
            </li>
          </ul>
        </Section>

        <Section title="Professional Experience">
          <ExperienceItem 
            role="Operations & Strategy Lead" 
            company="AMDG Group" 
            date="Ongoing"
          >
            <li>Scale the company from side-contracts to a full-time consultancy; manage all legal, financial, and strategic roadmapping.</li>
            <li>Serve as Lead System Architect for mission-driven organizations, designing complex data models and technical infrastructure for ecosystems like "Peregrinus" and "Emily Helps".</li>
            <li>Translate high-level stakeholder requirements into elegant, scalable technical roadmaps (The "AMDG Method").</li>
          </ExperienceItem>

          <ExperienceItem 
            role="Sr. Salesforce Architect / SRE" 
            company="Global Technology Company (Accenture)" 
            date="2020 – 2024"
          >
            <li>Lead global team in design, delivery, and roll-out of Salesforce instances for US State Government clients.</li>
            <li>Reduced dependency on costly low-code solutions by developing scalable Apex frameworks.</li>
            <li>Managed multi-million dollar digital transformation projects, focusing on reducing tech debt and maximizing ROI.</li>
            <li>Implemented SRE best practices, maintaining high uptime and utilizing Salesforce Optimizer for health checks.</li>
          </ExperienceItem>

          <ExperienceItem 
            role="Salesforce Architect & Developer" 
            company="MGA (Staffing)" 
            date="2018 – 2020"
            location="USA"
          >
            <li>Architected a 5-tenant Salesforce instance sharing a single code base, ensuring HIPAA compliance for PHI data.</li>
            <li>Built custom automated license minimization tools, reducing licensing costs by 50% for an 8,000-user instance.</li>
            <li>Developed a ground-up custom Applicant Tracking System (ATS) using .Net and Azure DevOps.</li>
          </ExperienceItem>

          <ExperienceItem 
            role="Project Manager & Technologist" 
            company="OnQ (Property Management)" 
            date="2016 – 2018"
          >
            <li>Consolidated 6 disparate software platforms down to 2, significantly reducing data errors.</li>
            <li>Identified and recovered $400k in receivables and $200k in outstanding invoices through process improvements.</li>
            <li>Designed customer-facing dashboards that reduced support call volume and improved owner transparency.</li>
          </ExperienceItem>

          <ExperienceItem 
            role="Business Development Associate" 
            company="Eirtec" 
            date="2015 – 2016"
            location="Ireland/Europe"
          >
            <li>Managed international accounts including Vodafone Deutschland, Blizzard Entertainment, and Orange.</li>
            <li>Coordinated contracts and built presentations for C-level executives.</li>
          </ExperienceItem>
        </Section>

        <Section title="Leadership & Ventures">
          <ExperienceItem 
            role="CEO & Founder" 
            company="AMDG Technologies & Emily Helps" 
            date="Ongoing"
          >
            <li>Lead multiple cross-functional teams in the successful development and deployment of the "Emily Helps" parish management ecosystem and AMDG systems.</li>
            <li>Drive strategic operational excellence, successfully scaling projects from concept to revenue-generating platforms.</li>
            <li>Champion a culture of reliability and "The Fatherhood Ethos" in team building, ensuring high-quality delivery through a dedicated network.</li>
          </ExperienceItem>
        </Section>
      </main>
    </>
  );
};

export default App;