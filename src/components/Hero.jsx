import React from "react";
import Navbar from "./Navbar";
import bgHero from "../assets/bgHero.jpg";

const Hero = () => {
  return (
    <div id="main">

      {/* Background Image */}
      <img
        src={bgHero}
        className="w-full h-screen object-cover"
        alt="fundo do topo da página"
      />

      {/* Container Main */}
      <div className="w-full h-screen absolute top-0 left-0">

        {/* Navbar component */}
        <Navbar />

        {/* Conteúdo do hero */}
        <div className="flex flex-col md:items-start px-5 py-8 md:px-5 md:py-12">

          {/* Texto principal */}
          <div className="md:max-w-[700px] border-l-orange-600 border-l-4">
            <h2 className="text-gray-200 text-4xl md:text-6xl font-bold p-3">
              Transformamos seu carro em uma obra de arte com nossos serviços de
              alta qualidade
            </h2>
          </div>

          {/* Btn Solicitar cotação */}
          <div className="w-full md:w-64 py-8">
            <button className="bg-orange-600 w-full py-5 px-8 text-gray-200 text-sm hover:bg-orange-600">
              Solicitar cotação
            </button>
          </div>

          {/* Contatos no rodape do hero */}
          <div className="absolute bottom-10 right-20 md:bottom-5 md:right-5 flex flex-col md:flex-row self-center items-center text-slate-200 gap-5">

            <div className="text-center">
              <h2 className="font-bold text-base">Zona de serviço</h2>
              <h2 className="text-base text-orange-700 font-bold">
                Macapá/Santana - Amapá
              </h2>
            </div>

            <hr className="md:hidden border-2 w-full m-3 border-orange-600" />

            <div className="text-center md:border-orange-600 md:border-l-2 md:px-5">
              <h2 className="text-base">bgdetailer@bgdetailer.com.br</h2>
              <h2 className="text-base">Whatsapp: (96)98102-3704</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
