import Telefono from '../../../Images/TelefonoCenterCar.png'
import { ChatBubbleLeftRightIcon, PhoneArrowDownLeftIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";



export default function Informacion() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¡Contáctanos!</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Estamos aca para ayudarte
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[16rem] max-w-lg sm:w-[57rem]"
            src={Telefono}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Si tienes alguna pregunta, consulta o simplemente deseas obtener más información, no dudes en ponerte en contacto con nosotros. Nuestro equipo de atención al cliente está disponible para brindarte la asistencia que necesitas y resolver todas tus inquietudes relacionadas con la compra o venta de autos.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                <PhoneArrowDownLeftIcon className="mt-1 h-5 w-5 flex-none text-dimViolet" aria-hidden="true" />

                  <span>
                    <strong className="font-semibold text-gray-900">Comunicación directa:</strong> Llámanos al 4699-2661 para hablar con uno de nuestros representantes. Estaremos encantados de atenderte y brindarte toda la información que necesites.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <ChatBubbleLeftRightIcon className="mt-1 h-5 w-5 flex-none text-dimViolet" aria-hidden="true" />

                  <span>
                    <strong className="font-semibold text-gray-900">Escribinos:</strong> Si prefieres comunicarte por escrito, puedes enviarnos un correo electrónico a [correo electrónico]. Nuestro equipo revisa regularmente los mensajes y te responderá lo antes posible.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <MapPinIcon className="mt-1 h-5 w-5 flex-none text-dimViolet" aria-hidden="true" />

                  <span>
                    <strong className="font-semibold text-gray-900">Ubicacion Fisica</strong> Nos ubicamos estratégicamente en la Avenida Mosconi 524, en Lomas del Mirador, Buenos Aires.
                    Nuestra ubicación está a tan solo cinco cuadras de la Avenida General Paz, lo que nos hace fácilmente accesibles desde diferentes puntos de la ciudad.
                    Te invitamos a visitarnos en nuestras instalaciones para recibir atención personalizada y explorar nuestra amplia selección de vehículos.
                  </span>
                </li>

                <li className="flex gap-x-3">
                <ClockIcon className="mt-1 h-5 w-5 flex-none text-dimViolet" aria-hidden="true" />

                  <span>
                    <strong className="font-semibold text-gray-900">Comunicación directa:</strong> Nuestros horarios de atención al cliente son los siguientes: de lunes a viernes, de 09:00 a 18:00 hs, y los sábados, de 09:00 a 15:00 hs. Durante estos horarios, nuestro equipo estará disponible para asistirte en todo lo que necesites en relación a la compra, venta o consulta de vehículos. Valoramos tu tiempo y nos esforzamos por brindarte un servicio eficiente y oportuno dentro de estos horarios establecidos. Ya sea que desees visitarnos en nuestra ubicación física, ponerte en contacto por teléfono o a través de nuestro formulario en línea, estaremos encantados de atenderte durante nuestros horarios de atención.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">¡Te escuchamos!</h2>
              <p className="mt-6">
                No dudes en comunicarte con nosotros, ya sea por teléfono, correo electrónico o a través del formulario de contacto en nuestra página web. Estamos aquí para atender tus consultas, ofrecerte asesoramiento personalizado y brindarte la mejor experiencia en el mundo de la compra-venta de autos. Tu satisfacción es nuestra prioridad y nos esforzamos por brindarte un servicio de calidad y una atención amigable en cada interacción. ¡Esperamos poder ayudarte pronto!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
