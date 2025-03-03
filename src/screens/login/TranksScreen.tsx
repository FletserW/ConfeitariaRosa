import Footer from "../../components/Footer";
import "../../styles/App.css";
// import { useNavigate } from "react-router-dom";
import { CheckCheck } from "lucide-react";

function TranksScreen() {
  // const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-pink-300 to-pink-50">
      <div className="min-w-[360px] min-h-[640px] max-w-[500px] max-h-[1024px] w-full h-full bg-white rounded-2xl shadow-lg border border-gray-300 relative">
        <div className="items-center justify-center flex flex-col">
          <CheckCheck size={300} color="#515151" />
          <h2 className="text-4xl ml-10 justify-center">
            Obrigado por se registar.
          </h2>
        </div>
        {/* Button */}
        <div className="w-full p-6 mt-6">
          <button className="w-full bg-pink-bg text-white py-2 rounded-full mt-20">
            Explorar Menu
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TranksScreen;
