import React from 'react';

const NavBar = () => {
  const menuItems = [
    { name: 'Home', link: '#' },
    {
      name: 'View',
      link: '#',
      dropdown: ['UAN Card', 'Passbook', 'Service History'],
    },
    {
      name: 'Manage',
      link: '#',
      dropdown: ['Basic Details', 'Contact Details', 'KYC', 'E-Nomination'],
    },
    {
      name: 'Account',
      link: '#',
      dropdown: ['Online Account Transfer Claim', 'Previous Employer'],
    },
    {
      name: 'Online Services',
      link: '#',
      dropdown: [
        'CLAIM (FORM-31,19,10C&10D)',
        'ONE MEMBER - ONE EPF ACCOUNT (TRANSFER REQUEST)',
        'TRACK CLAIM STATUS',
        'DOWNLOAD ANNEXURE K',
      ],
    },
  ];

  return (
    <>
    <nav className="bg-teal-600 p-3 shadow-md fixed top-24 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-start">
        <ul className="flex space-x-6 text-white text-base font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.link}
                className="hover:text-teal-100 focus:outline-none"
              >
                {item.name}
              </a>

              {item.dropdown && (
                <ul className="absolute left-0 mt-1 w-[260px] bg-white text-black border border-gray-300 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                  {item.dropdown.map((dropdownItem) => (
                    <li
                      key={dropdownItem}
                      className="border-b border-gray-300 last:border-b-0"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {dropdownItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
