// src/components/Sidebar.tsx
import React from "react";
import { Home, Boxes, Heart, User } from "lucide-react";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-10 bg-white w-64 h-full border-r border-gray-300 transition-transform ${
        isSidebarOpen ? "transform-none" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start p-4">
        <div
          className="flex items-center gap-4 mb-6 cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          <Home className="text-pink-500" size={24} />
          <span className="text-lg text-pink-500">Início</span>
        </div>
        <div
          className="flex items-center gap-4 mb-6 cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          <Boxes className="text-pink-500" size={24} />
          <span className="text-lg text-pink-500">Categorias</span>
        </div>
        <div
          className="flex items-center gap-4 mb-6 cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          <Heart className="text-pink-500" size={24} />
          <span className="text-lg text-pink-500">Favoritos</span>
        </div>
        <div
          className="flex items-center gap-4 mb-6 cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        >
          <User className="text-pink-500" size={24} />
          <span className="text-lg text-pink-500">Perfil</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
