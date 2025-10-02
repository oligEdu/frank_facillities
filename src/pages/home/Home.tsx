import { CheckCircle, Users, Clock, Shield, ArrowRight } from 'lucide-react';

function Home(){
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-50 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Facilities
              <span className="block text-blue-200">Residenciais</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Soluções completas em manutenção e gestão predial para seu condomínio ou residência
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-200" />
                <span className="text-lg">Manutenção preventiva e corretiva</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-200" />
                <span className="text-lg">Gestão de facilities especializada</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-200" />
                <span className="text-lg">Atendimento 24/7</span>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2"
            >
              <span>Solicite um Orçamento</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">500+</h3>
                  <p className="text-blue-200">Clientes Atendidos</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">24/7</h3>
                  <p className="text-blue-200">Suporte</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">10+</h3>
                  <p className="text-blue-200">Anos de Experiência</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">98%</h3>
                  <p className="text-blue-200">Satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;