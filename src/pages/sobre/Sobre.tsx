import { CheckCircle } from 'lucide-react';

// Sobre Component
const Sobre = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossa História
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-blue-600">Maryugo</strong> nasceu da necessidade de oferecer serviços de facilities de alta qualidade para o mercado residencial e predial. Com mais de 10 anos de experiência no setor, construímos nossa reputação baseada na confiança, qualidade e excelência no atendimento.
              </p>
              <p>
                Nossa equipe é formada por profissionais altamente capacitados e certificados, sempre prontos para atender às mais diversas demandas de manutenção e gestão predial. Utilizamos as melhores práticas do mercado e tecnologias modernas para garantir resultados superiores.
              </p>
              <p>
                Acreditamos que um ambiente bem cuidado é essencial para o bem-estar e qualidade de vida das pessoas. Por isso, tratamos cada projeto com dedicação e atenção aos detalhes, sempre buscando superar as expectativas dos nossos clientes.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Missão</h3>
                <p className="text-gray-600">
                  Proporcionar soluções completas em facilities, garantindo conforto, segurança e qualidade de vida aos nossos clientes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Visão</h3>
                <p className="text-gray-600">
                  Ser referência em facilities residenciais, reconhecida pela excelência e inovação em nossos serviços.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                  <span className="text-gray-600">Compromisso com a qualidade</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                  <span className="text-gray-600">Transparência e confiabilidade</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                  <span className="text-gray-600">Inovação constante</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                  <span className="text-gray-600">Sustentabilidade</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
                  <span className="text-gray-600">Atendimento personalizado</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Por que escolher a Maryugo?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Equipe especializada e certificada</li>
                <li>• Atendimento 24 horas por dia</li>
                <li>• Orçamentos transparentes</li>
                <li>• Garantia em todos os serviços</li>
                <li>• Uso de materiais de primeira qualidade</li>
                <li>• Agilidade na resolução de problemas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sobre;