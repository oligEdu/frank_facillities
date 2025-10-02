// Servicos Component
function Servicos() {
  const servicos = [
    {
      title: 'Manutenção Elétrica',
      description: 'Instalação, manutenção e reparo de sistemas elétricos residenciais e prediais',
      icon: '⚡'
    },
    {
      title: 'Hidráulica',
      description: 'Serviços completos de encanamento, reparos e instalações hidráulicas',
      icon: '🔧'
    },
    {
      title: 'Pintura e Acabamento',
      description: 'Pintura interna e externa, texturas e acabamentos especiais',
      icon: '🎨'
    },
    {
      title: 'Jardinagem',
      description: 'Manutenção de jardins, podas e paisagismo residencial',
      icon: '🌱'
    },
    {
      title: 'Limpeza Especializada',
      description: 'Limpeza profissional de áreas comuns e manutenção predial',
      icon: '✨'
    },
    {
      title: 'Portaria e Segurança',
      description: 'Gestão de portaria e serviços de segurança predial',
      icon: '🛡️'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em facilities para tornar sua vida mais prática e seu ambiente mais bem cuidado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{servico.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {servico.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {servico.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Precisa de um serviço específico?
          </h3>
          <p className="text-blue-100 mb-6">
            Entre em contato conosco e encontraremos a solução ideal para suas necessidades
          </p>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};
export default Servicos;