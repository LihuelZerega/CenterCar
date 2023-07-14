import { useState } from 'react';
import Contacto from './Contacto';
import Logo from './Logo';
import SobreNosotros from './SobreNosotros';
import MetodosDePago from './MetodosDePago';
import Vehiculos from './Vehiculos';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-primary px-12 py-4">
      <div className="flex justify-between items-center">
        <div className="">
          <Logo />
        </div>

        <div className="hidden sm:flex items-center">
          <Vehiculos />
          <MetodosDePago />
          <SobreNosotros />
          <Contacto />
        </div>

        <button className="block sm:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col mt-4 sm:hidden">
          <Vehiculos />
          <MetodosDePago />
          <SobreNosotros />
          <Contacto />
        </div>
      )}
    </div>
  );
}
