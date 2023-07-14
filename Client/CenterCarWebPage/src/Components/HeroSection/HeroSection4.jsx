import { Link } from 'react-router-dom';

const CustomButton1 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

const CustomButton2 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

const CustomButton3 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
};

const CustomButton4 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
};

export default function AboutUs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-dimViolet">Conócenos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Quiénes somos?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nos enorgullece ser líderes en el mercado automotriz y brindar a nuestros clientes una experiencia excepcional en cada transacción. Con más de 15 años de experiencia en el sector, hemos establecido una sólida reputación basada en la confianza, la integridad y la satisfacción del cliente.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">Sobre nosotros
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-dimViolet">
                  <CustomButton2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Ingresa a la sección Sobre nosotros en el siguiente enlace para ver toda nuestra historia y más información.</dd>
              <Link to="/SobreNosotros">Ir a Sobre nosotros</Link>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">Contacto
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-dimViolet">
                  <CustomButton4 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Elige la mejor forma de contactarte con nosotros para que podamos resolver tus dudas.</dd>
              <Link to="/Contacto">Ir a Contacto</Link>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">Sucursal
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-dimViolet">
                  <CustomButton1 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">📍 Estamos ubicados en Buenos Aires, en la Avenida Mosconi 524, en Lomas del Mirador.</dd>
              <a href="https://goo.gl/maps/ugSXxmq2oYLszmKU7">Ir a Maps</a>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">Horarios
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-dimViolet">
                  <CustomButton3 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Nuestro horario de atención es el siguiente:
                Lunes a Viernes: de 09:00 a 18:00 hs.
                Sábados: de 09:00 a 15:00 hs.</dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
}
