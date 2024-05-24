import './app.scss'
import './index.css'
import './funcionalidades.jsx'
import Navbar from './components/Navbar/index.tsx'
import SobreOCurso from './components/SobreOCurso/index.tsx'
import CodeCrafters from './components/CodeCrafters/index.tsx'

function App() {

  return (
    
    <>
      <Navbar/>
    <SobreOCurso/>
    <CodeCrafters/>
    </>
  )
}

export default App
