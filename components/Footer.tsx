import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-[720px] mx-auto px-6 py-12 print:hidden opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
      <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Richard Daly. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Operations & Strategy Lead
        </p>
      </div>
    </footer>
  );
};

export default Footer;
