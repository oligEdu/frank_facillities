import { Phone, Mail, MapPin } from 'lucide-react';

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">
              MARYUGO
            </div>
            <p className="text-gray-300 mb-4">
              Soluções completas em facilities para tornar sua vida mais prática e seu ambiente mais bem cuidado.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full">
                <Mail className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 p-2 rounded-full">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">comercial@maryugo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Maryugo Facilities. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;