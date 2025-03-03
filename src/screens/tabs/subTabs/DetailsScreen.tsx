import { useEffect, useState } from "react";
import "../../../styles/App.css";
import BottomNavigation from "../../../components/BottonNavigation";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function DetailsScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  const selectedCake = {
    name: "Choco Cupcake",
    price: "$125",
    description:
      "A delicious chocolate cupcake topped with cream and sprinkles.",
    imageUrl:
      "https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-pink-300 to-pink-50">
      <div className="min-w-[360px] min-h-[640px] max-w-[600px] w-full h-full bg-white rounded-2xl shadow-lg border border-gray-300 relative p-6">
        <Header isMobile={isMobile} toggleSidebar={toggleSidebar} />

        <div className="mt-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Detalhes do Produto
          </h1>
          <div className="bg-pink-100 rounded-lg p-4 mb-6">
            {/* Imagem do Produto */}
            <img
              src={selectedCake.imageUrl}
              alt={selectedCake.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            {/* Nome do Produto */}
            <h2 className="text-xl font-semibold text-gray-700">
              {selectedCake.name}
            </h2>
            {/* Preço do Produto */}
            <p className="text-pink-500 text-lg font-bold mb-4">
              {selectedCake.price}
            </p>
            {/* Descrição do Produto */}
            <p className="text-sm text-gray-700 mb-4">
              {selectedCake.description}
            </p>
            {/* Botão de Add to Cart */}
            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300 w-full">
              Add to Cart
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Avaliações
            </h2>
            {/* Exemplo de Avaliações */}
            <div className="flex items-start space-x-4 mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Review User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Username
                </h3>
                <p className="text-gray-600">This cake is amazing!</p>
              </div>
            </div>
          </div>
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

export default DetailsScreen;
