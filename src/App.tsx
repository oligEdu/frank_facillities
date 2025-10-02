import Navbar from "./components/navbar/Navbar";
import Contato from "./pages/contato/Contato";
import Servicos from "./pages/services/Servicos";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <Servicos />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;