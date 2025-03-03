import { useEffect, useState } from "react";
import CardsNew from "../../components/cards/CardsNew";
import "../../styles/App.css";
import BottomNavigation from "../../components/BottonNavigation";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CategoryScreen() {
  // Estado para controlar se a barra lateral está aberta
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Função para abrir ou fechar a barra lateral
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-pink-300 to-pink-50">
      <div className="min-w-[360px] min-h-[640px] max-w-[600px]  w-full h-full bg-white rounded-2xl shadow-lg border border-gray-300 relative p-6">
        <Header isMobile={isMobile} toggleSidebar={toggleSidebar} />
        {/* Cards New em Grid Responsivo */}
        <div
          className={`grid gap-4 ${isMobile ? "grid-cols-2" : "grid-cols-3"}`}
        >
          {/* Repetir o CardsNew 6 vezes */}
          {[...Array(6)].map((_, index) => (
            <CardsNew
              key={index}
              imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText={`Prato ${index + 1}`}
              dishName={`Prato ${index + 1}`}
            />
          ))}
        </div>

        <BottomNavigation />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <Footer />
    </div>
  );
}

export default CategoryScreen;
