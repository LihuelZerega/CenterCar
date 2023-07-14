import React from 'react';
import FinanciarIcon from '../../../Images/MetodosDePagoIcons/FinanciarICon.png';
import EfectivoIcon from '../../../Images/MetodosDePagoIcons/EfectivoICon.png';
import TransferenciaIcon from '../../../Images/MetodosDePagoIcons/TransferenciaICon.png';
import PermutaIcon from '../../../Images/MetodosDePagoIcons/PermutaICon.png';
import TarjetasICon from '../../../Images/MetodosDePagoIcons/TarjetasICon.png';
import MercadopagoIcon from '../../../Images/MetodosDePagoIcons/MercadopagoICon.png';

const Section = () => {
  return (
    <div className="bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-32 my-9 bg-primary">
        <div className="flex items-center justify-center md:justify-start">
          <div className="w-48 h-48 md:w-96 md:h-96">
            <img src={FinanciarIcon} alt="Financiar" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-2 font-sans font-bold text-secondary">Financiación</h1>
          <p className="text-lg md:text-2xl text-slate-300">Te ofrecemos opciones de financiación flexibles para que puedas adquirir el auto de tus sueños. Nuestros planes se adaptan a tus necesidades y te brindan la posibilidad de pagar en cuotas cómodas.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-32 my-9 bg-primary">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-2 font-sans font-bold text-secondary">Pago en efectivo</h1>
          <p className="text-lg md:text-2xl text-slate-300">Si prefieres hacer el pago en efectivo, te ofrecemos esta opción para mayor comodidad. Solo necesitarás acercarte a nuestra sucursal y realizar el pago en efectivo para completar tu transacción.</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <div className="w-48 h-48 md:w-96 md:h-96">
            <img src={EfectivoIcon} alt="Pago en efectivo" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-32 my-9 bg-primary">
        <div className="flex items-center justify-center md:justify-start">
          <div className="w-48 h-48 md:w-96 md:h-96">
            <img src={TransferenciaIcon} alt="Transferencia bancaria" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-2 font-sans font-bold text-secondary">Transferencia bancaria</h1>
          <p className="text-lg md:text-2xl text-slate-300">Aceptamos transferencias bancarias como método de pago seguro y confiable. Podrás realizar la transferencia desde tu entidad financiera y asegurarte de que el pago se realice de forma rápida y sin complicaciones.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-32 my-9 bg-primary">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-2 font-sans font-bold text-secondary">Permuta</h1>
          <h3 className="text-xl md:text-2xl mb-2 font-sans font-semibold text-secondary">(aceptamos tu vehículo como parte de pago)</h3>
          <p className="text-lg md:text-2xl text-slate-300">Si prefieres hacer el pago en efectivo, te ofrecemos esta opción para mayor comodidad. Solo necesitarás acercarte a nuestra sucursal y realizar el pago en efectivo para completar tu transacción.</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <div className="w-48 h-48 md:w-96 md:h-96">
            <img src={PermutaIcon} alt="Permuta" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-32 my-9 bg-primary">
        <div className="flex items-center justify-center md:justify-start">
          <div className="w-48 h-48 md:w-96 md:h-96">
            <img src={TarjetasICon} alt="Tarjeta de crédito" />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-sans font-bold text-secondary">Tarjeta de crédito</h1>
          <h3 className="text-xl md:text-2xl mb-2 font-sans font-semibold text-secondary">(con una tasa de interés del 20%)</h3>
          <p className="text-lg md:text-2xl text-slate-300">Aceptamos pagos con tarjeta de crédito, lo cual te brinda la flexibilidad de pagar en cuotas y disfrutar de tu nuevo auto de inmediato. Ten en cuenta que se aplicará una tasa de interés del 20% en caso de elegir esta opción.</p>
          <br />
          <br />
          <h1 className="text-3xl md:text-5xl mb-2 font-sans font-bold text-secondary">Tarjeta de débito</h1>
          <p className="text-lg md:text-2xl text-slate-300">Aceptamos pagos con tarjeta de débito para una transacción rápida y segura. Simplemente presenta tu tarjeta al momento de realizar la compra y el pago se debitará automáticamente de tu cuenta bancaria.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 md:mx-32 my-9 bg-primary">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-2 font-sans font-bold text-secondary">Mercado Pago</h1>
          <p className="text-lg md:text-2xl text-slate-300">También aceptamos pagos a través de Mercado Pago, una plataforma de pagos en línea confiable y segura. Podrás realizar el pago utilizando tu cuenta de Mercado Pago o escaneando el código QR.</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <div className="w-48 h-48 md:w-96 md:h-96">
            <img src={MercadopagoIcon} alt="Mercado Pago" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
