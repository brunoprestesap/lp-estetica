import React from "react";

const Navbar = () => {
  return (
    <div className="md:flex md:justify-between md:items-center px-5 py-5">
      <div>
        <h1 className="text-4xl font-bold text-orange-600">BG Detail</h1>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-8 text-gray-200 text-sm">
          <li>Serviços</li>
          <li>Sobre mim</li>
          <li>Contate-me</li>
        </ul>
      </div>

      <div className="hidden md:block">
        <button className="border-orange-600 py-3 px-5 border-2 text-gray-200 text-sm hover:bg-orange-600 rounded-lg">
          Solicitar cotação
        </button>
      </div>
    </div>
  );
};

export default Navbar;
