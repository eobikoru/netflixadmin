import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Newuser from "./pages/newuser/Newuser";
import Listmv from "./pages/listmv/Listmv";
function App() {
  return (
    <BrowserRouter>
     <Routes>
            <Route path="/" element={<Login/>} />  
             <Route path="/home" element={<Home />} />  
             <Route path="/newuser" element={<Newuser/>} />  
             <Route path="/list" element={<Listmv/>} /> 
                
     </Routes>
    </BrowserRouter>
  );
}

export default App;
