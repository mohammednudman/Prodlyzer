import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Home from "./components/home/home.js";
import Ecom1 from "./components/Ecom1/ecom1";
import Ecom2 from "./components/Ecom2/ecom2";
import Ecom3 from "./components/Ecom3/ecom3";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/ecom1" element={<Ecom1 />} />
          <Route path="/ecom2" element={<Ecom2 />} />
          <Route path="/ecom3" element={<Ecom3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
