import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from '../../../Images/fotorealizatuconsulta.png';

const HeroSection3 = () => {
  return (
    <section className="bg-white py-0 sm:py-16 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src={Image}
              alt="Consultation"
              className="max-w-xl w-full sm:w-4/5"
            />
          </div>

          <div className="w-full mt-0 text-center sm:w-1/2 sm:mt-0 sm:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold leading-tight"
            >
              Realizá tu consulta
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-xl text-gray-700"
            >
              Nos importa brindarte un servicio personalizado y atender todas tus consultas de manera rápida y eficiente. Sabemos lo importante que es despejar cualquier duda antes de tomar una decisión. Por eso, hemos incorporado una forma sencilla de comunicarnos contigo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mt-8 sm:justify-start"
            >
              <Link to="/https://vehiculos.mercadolibre.com.ar/_CustId_136444243">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 font-bold text-white bg-primary rounded-lg hover:bg-dimVioletLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Ver autos
                </motion.button>
              </Link>
              <Link to="https://wa.me/541141958594">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-dimVioletLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-bg-green-600 ml-2"
                >
                  Ir a Whatsapp
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection3;
