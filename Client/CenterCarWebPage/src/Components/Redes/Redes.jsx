import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Telefono from '../../../Images/TelefonoCenterCar.png';
import InstagramLogo from '../../../Images/InstagramLogo.png';
import FacebookLogo from '../../../Images/FacebookLogo.png';
import GmailLogo from '../../../Images/GmailLogo.png';
import LlamadaLogo from '../../../Images/LlamadaTelefono.png';

const Redes = () => {
  return (
    <>
      {/* Seccion 1 */}
      <div className="flex flex-col items-center justify-center min-h-0 my-1">
        <div className="flex flex-col sm:flex-row">
          {/* FOTO DE CONTACTO */}
          <div className="max-w-full max sm:w-1/2 flex items-center justify-center mb-8">
            <img src={Telefono} alt="Foto de contacto" className="max-w-full max-h-full" />
          </div>

          {/* REDES */}
          <div className="w-full sm:w-1/2 grid grid-cols-2 gap-4 items-center justify-center">

            <div>
              <Link to="https://www.instagram.com/centercar.ok/" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
                  <img src={InstagramLogo} alt="Instagram" className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">Instagram</h3>
                  <p className="text-sm text-center">¡Síguenos en Instagram para ver nuestros últimos posteos!</p>
                </div>
              </Link>

              <Link to="#" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg mt-4">
                  <img src={FacebookLogo} alt="Facebook" className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">Facebook</h3>
                  <p className="text-sm text-center">¡Síguenos en Facebook para ver nuestros últimos posteos!</p>
                </div>
              </Link>
            </div>

            <div>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg">
                  <img src={GmailLogo} alt="Email" className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-sm text-center">¡Envíanos un correo electrónico para que podamos resolver tus dudas!</p>
                </div>
              </Link>

              <Link to="#" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg mt-4">
                  <img src={LlamadaLogo} alt="Llamar" className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">Llamar</h3>
                  <p className="text-sm text-center">¡Llámanos para que podamos resolver tus dudas!</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Redes;
