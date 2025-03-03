import { useEffect, useState } from "react";
import "../../../styles/App.css";
import BottomNavigation from "../../../components/BottonNavigation";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Heart } from "lucide-react";

function CategoryItemScreen() {
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

  const cakes = [
    { name: "Choco Cupcake", price: "$125" },
    { name: "Birthday Cake 1", price: "$105" },
    { name: "Beni Caramel Cake", price: "$105" },
    { name: "Choco Dorayaki", price: "$105" },
    { name: "Caramel Pancake Fruit", price: "$105" },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-pink-300 to-pink-50">
      <div className="min-w-[360px] min-h-[640px] max-w-[600px] w-full h-full bg-white rounded-2xl shadow-lg border border-gray-300 relative p-6">
        <Header isMobile={isMobile} toggleSidebar={toggleSidebar} />

        <div className="mt-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Bolos</h1>
          <div className="space-y-4">
            {cakes.map((cake, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-pink-50 rounded-lg p-4"
              >
                {/* Imagem Circular */}
                <img
                  src="https://plus.unsplash.com/premium_vector-1713986485734-8d5eea98b771?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bolo"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                />
                {/* Nome e Preço*/}
                <div className="flex flex-col ml-2">
                  <h2 className="text-sm md:text-lg font-semibold text-gray-700">
                    {cake.name}
                  </h2>
                  <p className="text-xs md:text-pink-500">{cake.price}</p>
                </div>

                {/* Botão de Favorito */}
                <button className="text-xl  p-2 rounded-full transition duration-300">
                  <Heart size={24} /> {/* Ícone de coração */}
                </button>

                {/* Botão Add to Cart */}
                <button className="text-xs md:text-sm bg-pink-bg text-white px-4 py-3 rounded-lg hover:bg-pink-300 transition duration-300">
                  Add to Cart
                </button>
              </div>
            ))}
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

export default CategoryItemScreen;
