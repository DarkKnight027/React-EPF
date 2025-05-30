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
  ];

  return (
    <nav className="bg-teal-600 p-3 shadow-md fixed top-24 left-0 w-full z-50">
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
