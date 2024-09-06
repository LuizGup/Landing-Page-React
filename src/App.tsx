import "./app.scss";
import "./index.css";
import "./funcionalidades.jsx";
import Navbar from "./components/Navbar/index.tsx";
import SobreOCurso from "./components/SobreOCurso/index.tsx";
import CodeCrafters from "./components/CodeCrafters/index.tsx";
import Footer from "./components/Footer/index.tsx";
import PerguntasFrequentes from "./components/PerguntasFrequentes/index.tsx";
import Planos from "./components/Planos/index.tsx";

function App() {
  return (
    <>
      <Navbar />
      <SobreOCurso />
      <CodeCrafters />
      <Planos/>
      <PerguntasFrequentes/>
      <Footer/>
    </>
  );
}

export default App;
