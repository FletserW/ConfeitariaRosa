// src/components/BottomNavigation.tsx

import { Home, Boxes, Heart, User } from "lucide-react";

function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 md:hidden">
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full" />
          <Home size={24} />
          <span className="text-sm">Início</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full" />
          <Boxes size={24} />
          <span className="text-sm">Categorias</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full" />
          <Heart size={24} />
          <span className="text-sm">Favoritos</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 rounded-full" />
          <User size={24} />
          <span className="text-sm">Perfil</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
