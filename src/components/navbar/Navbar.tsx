import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Navbar Component
function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white flex items-center justify-center drop-shadow-sm py-1.5 px-6 fixed w-full z-1000">
      <div className="container flex items-center justify-between w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              MARYUGO
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;