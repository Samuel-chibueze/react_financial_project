import React, { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa';

const DropdownMenu = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleLogout = () => {
    // Add your logic for handling logout here
  };

  return (
    <div className="relative">
      <div onClick={toggleDropdown} className="cursor-pointer">
        <FaRegCircleUser />
      </div>

      <div
        className={`${
          dropdown
            ? 'block transition-opacity opacity-100'
            : 'hidden transition-opacity opacity-0'
        } absolute w-48 mt-2 py-2 bg-white border rounded-md shadow-lg text-black text-base z-10`}
      >
        <div className="hover:bg-gray-200 px-4 py-2 flex items-center cursor-pointer">
          <FaRegCircleUser className="mr-2" />
          <p>Setting</p>
        </div>
        <div className="hover:bg-gray-200 px-4 py-2 flex items-center cursor-pointer">
          <FaRegCircleUser className="mr-2" />
          <p>Setting</p>
        </div>
        <div className="hover:bg-gray-200 px-4 py-2 flex items-center cursor-pointer">
          <FaRegCircleUser className="mr-2" />
          <p>Setting</p>
        </div>
        <div
          className="hover:bg-red-200 px-4 py-2 flex items-center cursor-pointer"
          onClick={handleLogout}
        >
          <FaRegCircleUser className="mr-2" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
