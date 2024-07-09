//import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./components/pageFooter/Footer";
import Navbar from "./components/pageNavbar/Navbar";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


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
