
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home"
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="pt-20">
        <Home />
{/*         <Sobre />
        <Servico /> */}
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;