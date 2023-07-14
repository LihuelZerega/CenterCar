import React from 'react';

const HeroSection5 = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Juan López',
      car: 'Compró Chevrolet Cruze 2020',
      stars: 5,
      text: 'No podría estar más satisfecho con mi experiencia de compra. El personal fue amable, servicial y me guió en cada paso del proceso. Encontré el auto perfecto para mí y lo compré a un precio justo. Recomiendo encarecidamente esta empresa a todos',
    },
    {
      id: 2,
      name: 'Laura Martínez',
      car: 'Vendió Volkswagen Golf 2016',
      stars: 4,
      text: 'Mi experiencia de venta con la empresa de compra-venta de autos fue excepcional. El proceso fue rápido, transparente y sin complicaciones. Recibí una oferta justa por mi auto y el equipo se encargó de todos los trámites. ¡Altamente recomendado!',
    },
    {
      id: 3,
      name: 'María Fernández',
      car: 'Compró Ford Focus 2018',
      stars: 5,
      text: 'Encontré el auto que estaba buscando a un precio muy competitivo. El proceso fue fácil y el equipo me brindó toda la información que necesitaba. Estoy muy contenta con mi nuevo auto y recomendaría sus servicios a todos.',
    },
    {
      id: 4,
      name: 'Roberto Sánchez',
      car: 'Vendió Toyota Corolla 2012',
      stars: 4,
      text: 'Estoy muy satisfecho con la venta de mi auto a través de esta empresa. Fueron muy profesionales y me brindaron un excelente servicio. Me ayudaron con la valuación, la promoción y la gestión de la transferencia. ¡La transacción se realizó sin problemas y obtuve un buen precio por mi vehículo!',
    },
    {
      id: 5,
      name: 'Ana Rodríguez',
      car: 'Vendió Volkswagen Suran 2014',
      stars: 4,
      text: 'El proceso de venta de mi auto fue rápido y eficiente. Recibí una buena oferta y el equipo se encargó de todo el papeleo. Estoy satisfecha con el servicio proporcionado y lo recomendaría a otros propietarios de autos que deseen vender de manera conveniente.',
    },
    {
      id: 6,
      name: 'Juan Fernández',
      car: 'Compró Volkswagen Gol 2015',
      stars: 4,
      text: 'Mi experiencia de compra de un auto usado fue muy positiva. El personal fue amable y atento, respondiendo a todas mis preguntas y guiándome a lo largo del proceso. Estoy contento con mi elección y definitivamente consideraría volver a hacer negocios con ellos.',
    },
  ];

  const visibleTestimonials = testimonials.slice(0, 3); // Show the first 3 testimonials
  const hiddenTestimonials = testimonials.slice(3); // Remaining testimonials to be shown on toggle

  const [showHiddenTestimonials, setShowHiddenTestimonials] = React.useState(false);

  const toggleHiddenTestimonials = () => {
    setShowHiddenTestimonials(!showHiddenTestimonials);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonios de Clientes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-gray-600 mb-2">{testimonial.car}</p>
              <div className="flex items-center">
                {Array.from({ length: testimonial.stars }).map((_, index) => (
                  <svg
                    key={index}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9a1 1 0 10-2 0v2.267L8.293 9.707a1 1 0 10-1.414 1.414l2.828 2.828a1 1 0 001.414 0l2.828-2.828a1 1 0 10-1.414-1.414L11 11.267V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mt-4">{testimonial.text}</p>
            </div>
          ))}

          {showHiddenTestimonials &&
            hiddenTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-600 mb-2">{testimonial.car}</p>
                <div className="flex items-center">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <svg
                      key={index}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9a1 1 0 10-2 0v2.267L8.293 9.707a1 1 0 10-1.414 1.414l2.828 2.828a1 1 0 001.414 0l2.828-2.828a1 1 0 10-1.414-1.414L11 11.267V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-800 mt-4">{testimonial.text}</p>
              </div>
            ))}
        </div>

        {hiddenTestimonials.length > 0 && (
          <div className="text-center mt-6">
            <button
              className="bg-dimViolet text-white py-2 px-4 rounded-md hover:bg-rose-600 transition-colors duration-300"
              onClick={toggleHiddenTestimonials}
            >
              {showHiddenTestimonials ? 'Cerrar' : 'Ver Más'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection5;