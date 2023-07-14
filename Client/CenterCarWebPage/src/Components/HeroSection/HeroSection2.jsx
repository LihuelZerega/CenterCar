import Manos from '../../../Images/apreton-de-manos.png';
import Tiempo from '../../../Images/atras-en-el-tiempo.png';
import Edificio from '../../../Images/edificio.png';
import Gente from '../../../Images/grupo-de-chat.png';

const HeroSection2 = () => {
  return (
    <div className="px-2 py-0">
      <div className="flex flex-wrap justify-center mx-2 mt-0 mb-0 sm:mx-24 sm:mb-0 pb-0">
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <img src={Manos} alt="Manos" className="w-20 mb-4" />
            <h3 className="text-lg font-bold text-primary text-center">La seguridad y la confianza son nuestra prioridad</h3>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <img src={Tiempo} alt="Tiempo" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-bold text-primary text-center">Con más de 15 años de experiencia en el mercado automotriz</h3>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <img src={Edificio} alt="Edificio" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-bold text-primary text-center">Sucursal ubicada en Lomas del Mirador</h3>
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <img src={Gente} alt="Gente" className="w-20 mb-4" />
            <h3 className="text-lg font-bold text-primary text-center">Nos encargamos de todo el proceso</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
