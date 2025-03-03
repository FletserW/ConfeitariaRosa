// src/components/Header.tsx
import React from "react";
import { AlignJustify, Search, ShoppingCart } from "lucide-react";

interface HeaderProps {
  isMobile: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobile, toggleSidebar }) => {
  return (
    <>
      {/* Cabeçalho para Desktop (visível em telas maiores) */}
      <div
        className={`items-center justify-between mb-6 ${
          isMobile ? "hidden" : "md:flex"
        }`}
      >
        <AlignJustify
          className="text-black"
          size={24}
          onClick={toggleSidebar}
        />
        <h1 className="text-xl font-bold text-black">Home</h1>
        <div className="w-16 flex flex-row gap-2">
          <Search className="text-black" size={24} />
          <ShoppingCart className="text-black" />
        </div>
      </div>

      {/* Cabeçalho para Mobile (escondido em telas grandes) */}
      <div
        className={`flex items-center justify-between mb-6 ${
          isMobile ? "flex" : "md:hidden"
        }`}
      >
        <h1 className="text-xl font-bold text-black">Home</h1>
        <div className="w-16 flex flex-row gap-2">
          <Search className="text-black" size={24} />
          <ShoppingCart className="text-black" />
        </div>
      </div>
    </>
  );
};

export default Header;
