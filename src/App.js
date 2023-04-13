import "./App.css";
import Brand from "./components/NavBar/Brand";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
// import Productos from "./pages/Productos";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
// import UserDetail from "./pages/UserDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ApiLlamado from "./components/ApiLlamado/ApiLlamado";

function App() {

    return(
      <BrowserRouter>
          <NavBar />
          <Brand title="PRODUCTOS ON-LINE" />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/Nosotros" element={<Nosotros/>} />
            {/* <Route exact path="/Productos" element={<Productos/>} /> */}
            <Route exact path="/Contacto" element={<Contacto/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
            <Route exact path="*" element={<Error/>}/>
          </Routes>
          <Footer />
          
      </BrowserRouter>
  );
}

export default App;
