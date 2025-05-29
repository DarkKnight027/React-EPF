import React from 'react';
 
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex flex-col z-40">
      <div
        style={{ backgroundColor: '#2B9595' }}
        className="flex justify-end py-1 px-3 font-medium text-sm gap-3"
      >
        <a
          href="/contact"
          className="transition-all duration-300 ease-in-out hover:text-green-900 hover:underline hover:scale-105"
        >
          📞 Contact
        </a>
        <span>|</span>
        <a
          href="/faq"
          className="transition-all duration-300 ease-in-out hover:text-green-900 hover:underline hover:scale-105"
        >
          ❓ FAQ
        </a>
      </div>
 
      <div
        style={{ backgroundColor: '#156565' }}
        className="text-white text-center py-2 px-1.5 text-xs"
      >
        <p>©2015. Powered by EPFO Fri 27, May 2025 (PV 4.1.4)</p>
        <p>This site is best viewed at 1920 x 1080 resolution in Mozilla Firefox 58.0+</p>
      </div>
    </footer>
  );
};
 
export default Footer;