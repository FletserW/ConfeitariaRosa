import Footer from "../../components/Footer";
import "../../styles/App.css";
import { useNavigate } from "react-router-dom";

function Register1Screen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-pink-300 to-pink-50">
      <div className="min-w-[360px] min-h-[640px] max-w-[500px] max-h-[1024px] w-full h-full bg-white rounded-2xl shadow-lg border border-gray-300  relative">
        {/* Top Section - Eclipse */}
        <div className="w-full bg-pink-bg text-white text-center py-6 relative">
          <div className="absolute top-0 left-0 w-full">
            <svg
              className="w-full h-48 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              transform="scale(1, -1)" // Aqui estamos invertendo o SVG verticalmente
            >
              <ellipse
                cx="720" // Centro do eclipse (no meio da tela)
                cy="160" // Centro do eclipse na vertical
                rx="750" // Raio maior (horizontal)
                ry="180" // Raio menor (vertical)
                fill="#ffb7c2" // Cor do eclipse
              />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold">Login</h2>
            <p className="text-sm">
              Me fale <br /> qual seu nome?
            </p>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-20">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>

        {/* Form Section */}
        <div className="w-full p-6">
          <label className="block text-gray-700 mt-20">Primeiro Nome</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-400 outline-none p-1 mb-4"
          />
          <label className="block text-gray-700">Ultimo Nome</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-400 outline-none p-1 mb-2"
          />

          {/* Button */}
          <button className="w-full bg-pink-bg text-white py-2 rounded-full mt-4">
            Continuar
          </button>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-600 pb-4">
          Já tem uma conta?{" "}
          <span
            className="text-pink-500 font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            faça login
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register1Screen;
