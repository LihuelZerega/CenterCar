import { Link } from 'react-router-dom';

import Logo from '../../../Images/CenterCarLogo.png';

const Footer = () => {
  return (

    <footer className="bg-white dark:bg-primary pt-4 pb-8 xl:pt-8">

      <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">

        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-start">
              <ul>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/Contacto">
                    Vender
                  </Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/https://vehiculos.mercadolibre.com.ar/_CustId_136444243">
                    Comprar
                  </Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/MetodosDePago">
                    Metodos de Pago
                  </Link>
                </li>
                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/https://goo.gl/maps/gygmQEiMy9PP7gP48">
                    Sucursal
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/2 md:w-1/3 lg:w-1/3">

            <div class="text-start">
              <ul>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/">
                    Testimonios
                  </Link>
                </li>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/SobreNosotros">
                    Info
                  </Link>
                </li>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="/Contacto">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="w-1/2 md:w-1/3 lg:w-1/3">
            <div class="text-start">
              <ul>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="https://www.instagram.com/centercar.ok/">
                    Instagram
                  </Link>
                </li>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <Link to="https://www.facebook.com/centerautomoviles/">
                    Facebook
                  </Link>
                </li>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                  <a href="mailto:ejemplo@correo.com?subject=Hola%2C%20Buenos%20dias%21%20Estuve%20viendo%20su%20página%20web%20y%20tengo%20la%20siguiente%20consulta%3A">Enviar correo</a>
                </li>
                <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                <a href="tel:+541141958594">Llamar</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <hr />
        <div class="flex text-start pt-2 sm:pt-12 font-light">
          <img src={Logo} alt="CenterCar Logo" className="w-16 sm:w-12 sm:h-8 mr-2" />
          <h3>2023 Center Car. Todos los derechos reservados. Políticas de Privacidad. Términos y Condiciones</h3>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
