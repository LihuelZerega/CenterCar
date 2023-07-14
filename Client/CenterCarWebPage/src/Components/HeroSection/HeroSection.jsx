import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from '../../../Images/hero.png';

const HeroSection = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
            >
              Bienvenido a
              <span className="block sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-4xl text-left sm:text-4xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-dimViolet to-dimViolet">Center Car</span>
              </span>
              Automóviles
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mb-6 font-light text-xl"
            >
              Descubre el poder de elegir.
              Compra, vende y encuentra tu próximo auto con nosotros.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex space-x-4"
            >
              <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 font-bold text-white bg-dimViolet rounded-lg hover:bg-dimVioletLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dimViolet"
                >
                  Comprar
                </motion.button>
              </Link>


              <Link to="https://wa.me/541141958594">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-dimVioletLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-bg-green-600"
                >
                  Whatsapp
                </motion.button>
              </Link>
            </motion.div>
          </div>
          <div className="hidden lg:block col-span-5">
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src={Image}
              alt="mockup"
              className="w-full max-h-[480px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
