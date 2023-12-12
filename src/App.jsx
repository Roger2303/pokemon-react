import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemones from "./pages/Pokemones";
import PokemonesDetalle from "./pages/PokemonesDetalle";
import NavBar from "./components/NavBar";


const Contacto = () => {
  return <div> Contacto </div>
};

const App = () => {
  return <>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contacto' element={<Contacto/>}/>
  <Route path='/pokemones' element={<Pokemones/>}/>
  <Route path='/pokemones/:name' element={<PokemonesDetalle/>}/>
  <Route path='*'></Route>
  </Routes>
  </>
};

export default App;
