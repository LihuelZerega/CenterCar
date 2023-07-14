import Image1 from '../../../Images/iCloud Photos/Sin título-1.png';
import Image2 from '../../../Images/iCloud Photos/IMG_8095.jpg';
import Image3 from '../../../Images/iCloud Photos/IMG_8099.jpg';
import Image4 from '../../../Images/iCloud Photos/IMG_8097.jpg';

const Section = () => {
  return (
    <div className="bg-white">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img className="object-cover object-center w-full max-h-96 rounded-lg" src={Image1} alt="Imagen" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
              <p className="text-lg text-gray-600">
                Bienvenido a CenterCar. Nos enorgullece ser líderes en el mercado automotriz y brindar a nuestros clientes una experiencia excepcional en cada transacción. Con más de 15 años de experiencia en el sector, hemos establecido una sólida reputación basada en la confianza, la integridad y la satisfacción del cliente. Nuestro equipo está formado por apasionados expertos en automóviles, comprometidos en ayudarte a encontrar el vehículo perfecto que se adapte a tus necesidades y presupuesto. Ya sea que estés buscando vender tu automóvil actual o encontrar el auto de tus sueños, nos encargamos de todo el proceso para que tu experiencia sea cómoda y sin complicaciones. Nos diferenciamos al proporcionar un servicio personalizado y orientado al cliente. Valoramos la transparencia y nos esforzamos por brindarte toda la información necesaria para que tomes decisiones informadas. Además, contamos con una sucursal estratégicamente ubicada en Lomas del Mirador, para estar más cerca de ti y brindarte un servicio localizado. En nuestra empresa, la satisfacción del cliente es nuestra prioridad número uno. Nos enorgullece ver a nuestros clientes satisfechos y lograr relaciones duraderas con ellos. Estamos comprometidos en ofrecerte la mejor experiencia de compra-venta de autos, respaldada por un equipo profesional, conocimientos especializados y un enfoque centrado en tus necesidades. Gracias por elegirnos como tu socio de confianza en el apasionante mundo de los automóviles. Estamos ansiosos por ayudarte en tu próximo viaje automotriz y brindarte un servicio excepcional que supere tus expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Historia y Misión</h2>
              <p className="text-lg">
                Desde nuestra fundación, nuestra empresa de compra-venta de autos ha estado dedicada a brindar una experiencia excepcional a nuestros clientes. Nuestra historia se basa en la pasión por los automóviles y en el deseo de facilitar el proceso de compra y venta de vehículos. Nuestra misión es ofrecer un servicio confiable, transparente y de calidad, proporcionando a nuestros clientes soluciones personalizadas que se ajusten a sus necesidades automotrices.
              </p>
            </div>
            <div>
              <img className="object-cover object-center w-full max-h-96 rounded-lg" src={Image2} alt="Imagen" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img className="object-cover object-center w-full max-h-96 rounded-lg" src={Image3} alt="Imagen" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Experiencia y Conocimientos</h2>
              <p className="text-lg text-gray-600">
                Con más de 15 años de experiencia en el sector automotriz, nuestro equipo cuenta con un amplio conocimiento y experiencia en la evaluación, compra y venta de automóviles. Nos enorgullece contar con expertos en automóviles que están al tanto de las últimas tendencias y desarrollos del mercado. Nuestro equipo se capacita de forma continua para brindar un servicio profesional y asesoramiento especializado a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Servicios Ofrecidos</h2>
              <p className="text-lg">
                Ofrecemos una amplia gama de servicios en nuestra empresa de compra-venta de autos. Desde la evaluación y compra de vehículos usados hasta la venta de automóviles de calidad, nos encargamos de cada etapa del proceso. Además, ofrecemos asistencia en trámites de transferencia, financiamiento y garantía, para que nuestros clientes puedan disfrutar de una experiencia integral y sin complicaciones al adquirir o vender un automóvil.
              </p>
            </div>
            <div>
              <img className="object-cover object-center w-full max-h-96 rounded-lg" src={Image4} alt="Imagen" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Compromiso con los Clientes</h2>
            <p className="text-lg text-gray-600">
              Nuestro compromiso principal es la satisfacción del cliente. Nos esforzamos por brindar un servicio personalizado y orientado a las necesidades de cada individuo que confía en nosotros. Valoramos la transparencia, la honestidad y la confianza en todas nuestras interacciones con los clientes. Nos dedicamos a escuchar atentamente sus requerimientos y brindarles soluciones que se ajusten a sus expectativas. Nuestro objetivo es superar las expectativas de nuestros clientes y establecer relaciones a largo plazo basadas en la confianza mutua y el respeto. En cada aspecto de nuestro negocio, nos esforzamos por cumplir con nuestra misión, brindar un servicio excepcional y ser el socio confiable en el mundo automotriz para nuestros clientes. Estamos comprometidos en hacer de la experiencia de compra o venta de automóviles una experiencia gratificante y sin preocupaciones para todos aquellos que confían en nosotros.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
