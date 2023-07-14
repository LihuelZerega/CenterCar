import Image from '../../../Images/iCloud Photos/IMG_8095.jpg';

const HeaderSection = () => {
  return (
    <div className="bg-primary">
      <div className="relative h-[32rem] sm:h-[40rem] md:h-[48rem] lg:h-[56rem] xl:h-[64rem] flex aling-center justify-center">
        <img
          className="object-cover w-full h-full"
          src={Image}
          alt="Header"
        />
        <div className="absolute inset-0 bg-primary opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Metodos de Pago
            </h1>
            <p className="mt-4 text-xl text-white sm:text-2xl md:text-3xl">
            Seguridad y conveniencia al alcance de tus manos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
