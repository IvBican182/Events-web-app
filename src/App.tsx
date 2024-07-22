//import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./components/pageFooter/Footer";
import Navbar from "./components/pageNavbar/Navbar";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// let require:any;

//   const express = require("express");
//   const cors = require("cors");

//   const corsOptions = {
//     origin: "http://127.0.0.1:5173",
//   };

//   const app = express();
//   app.use(cors(corsOptions));


function App() {

  


  return (
    <section className="container">
      <Navbar />
        <Outlet />
      <Footer />
    </section>
    
  )
}

export default App
