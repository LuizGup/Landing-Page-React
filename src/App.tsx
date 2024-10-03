import "./app.scss";
import "./index.css";
import Navbar from "./components/Navbar/index.tsx";
import SobreOCurso from "./components/SobreOCurso/index.tsx";
import CodeCrafters from "./components/CodeCrafters/index.tsx";
import Footer from "./components/Footer/index.tsx";
import PerguntasFrequentes from "./components/PerguntasFrequentes/index.tsx";
import Planos from "./components/Planos/index.tsx";
import { initScrollAnimations } from "./resources/funcionalidades.ts";
import React, { useEffect } from 'react';



const App: React.FC = () => {
  useEffect(() => {
    // Chama a função que inicializa as animações
    const cleanupObserver = initScrollAnimations();

    // Limpa o observer ao desmontar o componente
    return () => {
      cleanupObserver();
    };
  }, []);
 
  return (
    <>
      <Navbar />
      <SobreOCurso />
      <CodeCrafters />
      <Planos />
      <PerguntasFrequentes />
      <Footer />
    </>
  );
}

export default App;
