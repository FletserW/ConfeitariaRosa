import { useEffect, useState } from "react";
import CardsNew from "../../components/cards/CardsNew";
import Cards from "../../components/cards/Cards";
import "../../styles/App.css";
import { Flame, PlusCircle } from "lucide-react";
import BottomNavigation from "../../components/BottonNavigation";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Logo from "../../assets/logo.jpg";
import Footer from "../../components/Footer";

function HomeScreen() {
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
        {/* Conteúdo da tela */}
        <div className="mb-6">
          <div className="bg-white rounded-lg p-4">
            <img
              src={Logo}
              alt="Popular 1"
              className="w-full h- object-cover rounded-md mb-2"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Mais populares
            </h2>
            <Flame className="text-pink-500" size={20} />
          </div>

          {/* Scroll Horizontal com animação contínua */}
          <div className="overflow-hidden w-full">
            <div className="flex scrolling-wrapper animate-scroll space-x-4">
              {/* Imagens originais */}
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />

              {/* Imagens duplicadas */}
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />
              <Cards
                imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Prato 1"
                dishName="Prato 1"
              />
            </div>
          </div>
        </div>

        {/* Novas Receitas */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Novas Receitas
            </h2>
            <PlusCircle className="text-pink-500" size={20} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CardsNew
              imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText="Prato 1"
              dishName="Prato 1"
            />
            <CardsNew
              imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText="Prato 1"
              dishName="Prato 1"
            />
            <CardsNew
              imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText="Prato 1"
              dishName="Prato 1"
            />
            <CardsNew
              imageSrc="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              altText="Prato 1"
              dishName="Prato 1"
            />
          </div>
        </div>
      </div>
      <BottomNavigation />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Footer />
    </div>
  );
}

export default HomeScreen;
