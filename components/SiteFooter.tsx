import React from 'react';

const SiteFooter: React.FC = () => {
  return (
    <footer className="max-w-[720px] mx-auto px-6 py-12 print:hidden">
      <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Richard Daly. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Operations & Strategy Lead
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
