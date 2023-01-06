import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Newuser from "./pages/newuser/Newuser";
function App() {
  return (
    <BrowserRouter>
     <Routes>
            <Route path="/" element={<Login/>} />  
             <Route path="/home" element={<Home />} />  
             <Route path="/sign" element={<Newuser/>} />  
                
     </Routes>
    </BrowserRouter>
  );
}

export default App;
