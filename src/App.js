
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Addmin } from "./Addmin";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Pagenotfound from "./pages/Pagenotfound";
// import Register from "./pages/Register";
import{
  Home,
  Login,
  Register,
  Pagenotfound,
  About,
   
  
  
} from "./pages"
import { DashBord } from "./pages/addmin/DashBord";
function App() {
  return <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/Register" element={<Register/>}/>
     <Route path="/addmin/DashBord" element={<Addmin element={<DashBord/>}/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
