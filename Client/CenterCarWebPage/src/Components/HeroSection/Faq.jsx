import React, { useState } from 'react';

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: '¿Cuáles son los requisitos para vender mi auto con ustedes?',
      answer: [
        'Tener todos los documentos y papeles del vehículo al día.',
        'No tener infracciones de tránsito pendientes.',
        'El auto debe estar libre de deudas de patentes.',
      ],
    },
    {
      id: 2,
      question: '¿Cómo funciona el proceso de compra de un vehículo?',
      answer: [
        'Visita nuestra sucursal y selecciona el automóvil de tu interés.',
        'Realiza una seña para reservar el vehículo.',
        'Procede al pago de la operación según las condiciones acordadas.',
        'Una vez realizado el pago, se inicia el trámite de transferencia, el cual se completa en un plazo de 7 a 10 días hábiles.',
      ],
    },
    {
      id: 3,
      question: '¿Qué documentos necesito para realizar la transferencia de un automóvil?',
      answer: ['Para realizar la transferencia de un automóvil, es necesario presentar el documento de identidad (DNI) del comprador.'],
    },
    {
      id: 4,
      question: '¿Ofrecen financiamiento para la compra de autos?',
      answer: ['Trabajamos en colaboración con el banco Santander Río, el cual ofrece opciones de financiamiento para la compra de autos. Los clientes tienen la posibilidad de elegir entre una tasa fija o variable (tasa UVA).'],
    },
    {
      id: 5,
      question: '¿Qué marcas y modelos de automóviles tienen disponibles?',
      answer: ['Somos una empresa multimarca y contamos con una amplia variedad de marcas y modelos de automóviles disponibles. Te invitamos a visitar la sección de Vehículos en nuestro sitio web para ver todas las opciones que ofrecemos.'],
    },
    {
      id: 6,
      question: '¿Cuál es la garantía que ofrecen en los vehículos que venden?',
      answer: ['En los vehículos que vendemos, ofrecemos una garantía de 3 meses para el motor y la caja de cambios en aquellos autos fabricados a partir del año 2014.'],
    },
    {
      id: 7,
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: [
        'Aceptamos diversos métodos de pago, entre ellos:',
        '- Financiación.',
        '- Transferencia bancaria.',
        '- Pago en efectivo.',
        '- Permuta (aceptamos tu vehículo como parte de pago).',
        '- Tarjeta de crédito (con una tasa de interés del 20%).',
        '- Tarjeta de débito.',
        '- Mercado Pago.',
      ],
    },
    {
      id: 8,
      question: '¿Tienen servicio de postventa o asistencia técnica?',
      answer: [
        'Sí, brindamos un servicio completo de postventa y asistencia técnica. Nuestro equipo está disponible para ayudarte en diferentes aspectos, desde la realización de transferencias hasta la contratación de seguros.',
        'Nos aseguramos de brindar un servicio integral y de calidad a nuestros clientes en todas las etapas del proceso.',
      ],
    },
  ];

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (faqId) => {
    setActiveFAQ(activeFAQ === faqId ? null : faqId);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 focus:outline-none"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${activeFAQ === faq.id ? 'transform rotate-180' : ''
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFAQ === faq.id && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-800">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
