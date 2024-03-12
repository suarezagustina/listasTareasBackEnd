import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FormularioTareas from './components/FormularioTareas';
import Menu from './components/common/Menu';
import Inicio from './components/Inicio';
import Footer from "./components/common/Footer";
import "bootstrap-icons/font/bootstrap-icons.css"
function App() {

  return (
    <>
    <Menu></Menu>
    <Inicio></Inicio>
    <FormularioTareas></FormularioTareas>
    <Footer></Footer>
    </>
  )
}

export default App
