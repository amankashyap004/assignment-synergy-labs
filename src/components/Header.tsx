import React from "react";

const Header: React.FC = () => {
  return (
    <header className=" py-4 lg:py-6 shadow-lg w-full fixed top-0 z-50 bg-white">
      <nav className="container px-4 lg:px-10 flex justify-between items-center">
        <a
          href={"/"}
          className="font-semibold text-lg lg:text-2xl font-plusJakartaSans"
        >
          TODO
        </a>
      </nav>
    </header>
  );
};

export default Header;
