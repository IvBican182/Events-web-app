import Homepage from "./Pages/Homepage/Homepage";
import Footer from "./components/pageFooter/Footer";
import Navbar from "./components/pageNavbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <section className="container">
      <Navbar />
        <Homepage />
      <Footer />
    </section>
    
  )
}

export default App
