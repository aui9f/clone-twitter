import ReactDOM from "react-dom/client";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { React, useState } from "react";

function App() {
  const [isLogin, setInLogin] = useState(false)
    
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          {isLogin?<Route path="/" element={<Home/>}/>:<Route path="/" element={<Login/>}/>}
          
          
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
