import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FormularioTareas from './components/FormularioTareas';
import Menu from './components/common/Menu';
import Inicio from './components/Inicio';
import Footer from "./components/common/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tareas from "./components/Tareas";
import TareasLista from "./components/TareasLista";
import Error404 from "./components/Error404";
function App() {

  return (
    <>
    <BrowserRouter>
   <Menu></Menu>
    <Routes>
    <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/vertareas" element={<Tareas></Tareas>}></Route>
        <Route exact path="/creartarea" element={<FormularioTareas></FormularioTareas>}></Route>
        <Route exact path="/modificartarea" element={<TareasLista></TareasLista>}></Route>
        <Route exact path="/tarea/crear" element={<FormularioTareas editar={false} titulo="Nueva Tarea"></FormularioTareas>}></Route>
        <Route exact path="/tarea/editar/:id" element={<FormularioTareas editar={true} titulo="Editar Tarea"></FormularioTareas>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
    </>
  )
}

export default App
