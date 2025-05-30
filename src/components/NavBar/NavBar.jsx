import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "View",
      link: "#",
      dropdown: [
        { name: "PROFILE", link: "/Profile" },
        { name: "SERVICE HISTORY", link: "/service-history" },
        { name: "UAN-CARD", link: "/uan-card" },
        { name: "PASSBOOK", link: "/Passbook" },
      ],
    },
    {
      name: 'Manage',
      link: '#',
      dropdown: [
        { name: 'JOINT DECLARATION', link: '/joint-declaration' },
         { name: 'CONTACT DETAILS', link: '/contact-details' },
        { name: 'KYC', link: '/kyc' },
        { name: 'E-NOMINATION', link: '/e-nomination' },
        { name: 'MARK EXIT', link: '/mark-exit' },
      ],
    },
    
    {
      name: 'Account',
      link: '#',
      dropdown: [
        { name: 'CHANGE PASSWORD', link: '/Change-password' },
      ],
    },
    {
      name: 'Online Services',
      link: '#',
      dropdown: [
        { name: 'CLAIM (FORM-31,19,10C&10D)', link: '/claim' },
        { name: 'ONE MEMBER - ONE EPF ACCOUNT (TRANSFER REQUEST)', link: '/epf-transfer' },
        { name: 'TRACK CLAIM STATUS', link: '/claim-status' },
        { name: 'DOWNLOAD ANNEXURE K', link: '/annexure-k' },
      ],
    },
    
  ];
 
  return (
    <nav className="bg-teal-600 p-3 shadow-md fixed w-full">
      <div className="container mx-auto flex items-center justify-start">
        <ul className="flex space-x-6 text-white text-base font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              {item.link !== "#" ? (
                <Link
                  to={item.link}
                  className="hover:text-teal-100 focus:outline-none"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="hover:text-teal-100 cursor-pointer">
                  {item.name}
                </span>
              )}
              {item.dropdown && (
                <ul className="absolute left-0 mt-1 w-[260px] bg-white text-black border border-gray-300 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  {item.dropdown.map((dropdownItem) => (
                    <li
                      key={dropdownItem.name}
                      className="border-b border-gray-300 last:border-b-0"
                    >
                      <Link
                        to={dropdownItem.link}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
 
export default NavBar;