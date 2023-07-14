import { useState } from 'react';
import { Link } from 'react-router-dom';

const Vehiculos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative group mr-4">
      <button
        className="text-white font-sans transition-colors duration-300 hover:text-gray-300"
        onClick={openModal}
      >
        <b>Vehiculos</b>
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className='flex justify-between'>
              <h3 className="text-xl font-bold mb-4">Categorías</h3>
              <button className="mb-4 mr-4 font-sans font-bold text-primary" onClick={closeModal}>
                X
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                <div>
                  <h3 className="font-bold mb-2">Marca</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_60249#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D60249%26applied_value_name%3DVolkswagen%26applied_value_order%3D10%26applied_value_results%3D15%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Volkswagen</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_67781#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D67781%26applied_value_name%3DFiat%26applied_value_order%3D5%26applied_value_results%3D13%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Fiat</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_58955#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D58955%26applied_value_name%3DChevrolet%26applied_value_order%3D3%26applied_value_results%3D6%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Chevrolet</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_9909#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D9909%26applied_value_name%3DRenault%26applied_value_order%3D8%26applied_value_results%3D5%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Renault</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_60279#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D60279%26applied_value_name%3DPeugeot%26applied_value_order%3D7%26applied_value_results%3D3%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Peugeot</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_66432_NoIndex_True#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D66432%26applied_value_name%3DFord%26applied_value_order%3D6%26applied_value_results%3D2%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Ford</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_60297_NoIndex_True#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D60297%26applied_value_name%3DToyota%26applied_value_order%3D9%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Toyota</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_40661_NoIndex_True#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D40661%26applied_value_name%3DAudi%26applied_value_order%3D1%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Audi</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_BRAND_389169_NoIndex_True#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D1%26applied_value_id%3D389169%26applied_value_name%3DCitro%C3%ABn%26applied_value_order%3D4%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Citroen</li>
                    </Link>

                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Año</h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>

                      <ul className="">
                        <Link to="https://vehiculos.mercadolibre.com.ar/2023/_CustId_136444243_NoIndex_True#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2023-2023%5D%26applied_value_name%3D2023%26applied_value_order%3D1%26applied_value_results%3D1%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2023</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2022/_CustId_136444243_NoIndex_True#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2022-2022%5D%26applied_value_name%3D2022%26applied_value_order%3D2%26applied_value_results%3D2%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2022</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2021/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2021-2021%5D%26applied_value_name%3D2021%26applied_value_order%3D3%26applied_value_results%3D3%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2021</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2020/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2020-2020%5D%26applied_value_name%3D2020%26applied_value_order%3D3%26applied_value_results%3D3%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2020</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2019/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2019-2019%5D%26applied_value_name%3D2019%26applied_value_order%3D3%26applied_value_results%3D3%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2019</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2018/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2018-2018%5D%26applied_value_name%3D2018%26applied_value_order%3D4%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2018</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2017/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2017-2017%5D%26applied_value_name%3D2017%26applied_value_order%3D5%26applied_value_results%3D4%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2017</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2016/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2016-2016%5D%26applied_value_name%3D2016%26applied_value_order%3D6%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2016</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2015/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2015-2015%5D%26applied_value_name%3D2015%26applied_value_order%3D7%26applied_value_results%3D4%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2015</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2014/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2014-2014%5D%26applied_value_name%3D2014%26applied_value_order%3D8%26applied_value_results%3D5%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2014</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2013/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2013-2013%5D%26applied_value_name%3D2013%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2013</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2012/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2012-2012%5D%26applied_value_name%3D2012%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2012</li>
                        </Link>
                      </ul>

                      <ul className="sm:ml-2">
                        <Link to="https://vehiculos.mercadolibre.com.ar/2011/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2011-2011%5D%26applied_value_name%3D2011%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2011</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2010/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2010-2010%5D%26applied_value_name%3D2010%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2010</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2009/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2009-2009%5D%26applied_value_name%3D2009%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2009</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2008/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2008-2010%5D%26applied_value_name%3D2008%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2008</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2007/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2007-2007%5D%26applied_value_name%3D2007%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2007</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2006/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2006-2006%5D%26applied_value_name%3D2006%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2006</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2005/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2005-2005%5D%26applied_value_name%3D2005%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2005</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2004/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2004-2010%5D%26applied_value_name%3D2004%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2004</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2003/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2003-2010%5D%26applied_value_name%3D2003%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2003</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2002/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2002-2010%5D%26applied_value_name%3D2002%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2002</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2001/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2001-2010%5D%26applied_value_name%3D2001%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2001</li>
                        </Link>
                        <Link to="https://vehiculos.mercadolibre.com.ar/2000/_CustId_136444243#applied_filter_id%3DVEHICLE_YEAR%26applied_filter_name%3DA%C3%B1o%26applied_filter_order%3D5%26applied_value_id%3D%5B2000-2000%5D%26applied_value_name%3D2000%26applied_value_order%3D9%26applied_value_results%3D6%26is_custom%3Dfalse">
                          <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>2000</li>
                        </Link>
                      </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Precio</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_PriceRange_0ARS-3000000ARS">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Menos de <p className='font-bold text-sm'>$ 3.000.000</p></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_PriceRange_3000000ARS-3500000ARS">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Entre <p className='font-bold text-sm'>$ 3.000.000 y $ 3.500.000</p></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_PriceRange_3500000ARS-4000000ARS">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Entre <p className='font-bold text-sm'>$ 3.500.000 y $ 4.000.000</p></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_PriceRange_4000000ARS-6000000ARS">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Entre <p className='font-bold text-sm'>$ 4.000.000 y $ 6.000.000</p></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_PriceRange_6000000ARS-0ARS">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Mas <p className='font-bold text-sm'>$ 6.000.000</p></li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Condición</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_ITEM*CONDITION_2230284_NoIndex_True#applied_filter_id%3DITEM_CONDITION%26applied_filter_name%3DCondici%C3%B3n%26applied_filter_order%3D7%26applied_value_id%3D2230284%26applied_value_name%3DNuevo%26applied_value_order%3D1%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Nuevo</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_ITEM*CONDITION_2230581#applied_filter_id%3DITEM_CONDITION%26applied_filter_name%3DCondici%C3%B3n%26applied_filter_order%3D7%26applied_value_id%3D2230581%26applied_value_name%3DUsado%26applied_value_order%3D2%26applied_value_results%3D47%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Usado</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Carrocería</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_VEHICLE*BODY*TYPE_452758#applied_filter_id%3DVEHICLE_BODY_TYPE%26applied_filter_name%3DTipo+de+carrocer%C3%ADa%26applied_filter_order%3D9%26applied_value_id%3D452758%26applied_value_name%3DSed%C3%A1n%26applied_value_order%3D5%26applied_value_results%3D21%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Sedan</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_VEHICLE*BODY*TYPE_479344#applied_filter_id%3DVEHICLE_BODY_TYPE%26applied_filter_name%3DTipo+de+carrocer%C3%ADa%26applied_filter_order%3D9%26applied_value_id%3D479344%26applied_value_name%3DHatchback%26applied_value_order%3D2%26applied_value_results%3D19%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>HatchBack</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_NoIndex_True_VEHICLE*BODY*TYPE_452756#applied_filter_id%3DVEHICLE_BODY_TYPE%26applied_filter_name%3DTipo+de+carrocer%C3%ADa%26applied_filter_order%3D9%26applied_value_id%3D452756%26applied_value_name%3DPick-Up%26applied_value_order%3D4%26applied_value_results%3D2%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>PickUp</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_NoIndex_True_VEHICLE*BODY*TYPE_452750#applied_filter_id%3DVEHICLE_BODY_TYPE%26applied_filter_name%3DTipo+de+carrocer%C3%ADa%26applied_filter_order%3D9%26applied_value_id%3D452750%26applied_value_name%3DFurg%C3%B3n%26applied_value_order%3D1%26applied_value_results%3D2%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Furgon</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Kilometros</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_KILOMETERS_0.001km-50000km#applied_filter_id%3DKILOMETERS%26applied_filter_name%3DKil%C3%B3metros%26applied_filter_order%3D8%26applied_value_id%3D%5B0.001km-50000km%5D%26applied_value_name%3D0+a+50.000+km%26applied_value_order%3D1%26applied_value_results%3D10%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'><b>0</b> a <b>50.000</b></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_KILOMETERS_50000km-75000km#applied_filter_id%3DKILOMETERS%26applied_filter_name%3DKil%C3%B3metros%26applied_filter_order%3D8%26applied_value_id%3D%5B50000km-75000km%5D%26applied_value_name%3D50.000+a+75.000+km%26applied_value_order%3D1%26applied_value_results%3D10%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'><b>50.000</b> a <b>75.000</b></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_KILOMETERS_75000km-90000km#applied_filter_id%3DKILOMETERS%26applied_filter_name%3DKil%C3%B3metros%26applied_filter_order%3D8%26applied_value_id%3D%5B75000km-90000km%5D%26applied_value_name%3D75.000+a+90.000+km%26applied_value_order%3D1%26applied_value_results%3D10%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'><b>75.000</b> a <b>90.000</b></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_KILOMETERS_90000km-100000km#applied_filter_id%3DKILOMETERS%26applied_filter_name%3DKil%C3%B3metros%26applied_filter_order%3D8%26applied_value_id%3D%5B90000km-100000km%5D%26applied_value_name%3D90000+a+100.000+km%26applied_value_order%3D1%26applied_value_results%3D10%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'><b>90.000</b> a <b>100.000</b></li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_KILOMETERS_100000km-0km#applied_filter_id%3DKILOMETERS%26applied_filter_name%3DKil%C3%B3metros%26applied_filter_order%3D8%26applied_value_id%3D%5B100000km-0km%5D%26applied_value_name%3D100000+a+0+km%26applied_value_order%3D1%26applied_value_results%3D10%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Mas de <b>100.000</b></li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Tipo de Combustible</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_FUEL*TYPE_64364#applied_filter_id%3DFUEL_TYPE%26applied_filter_name%3DTipo+de+combustible%26applied_filter_order%3D10%26applied_value_id%3D64364%26applied_value_name%3DNafta%26applied_value_order%3D3%26applied_value_results%3D34%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Nafta</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_FUEL*TYPE_372593#applied_filter_id%3DFUEL_TYPE%26applied_filter_name%3DTipo+de+combustible%26applied_filter_order%3D10%26applied_value_id%3D372593%26applied_value_name%3DNafta%2FGNC%26applied_value_order%3D4%26applied_value_results%3D10%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Nafta/GNC</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_FUEL*TYPE_60406#applied_filter_id%3DFUEL_TYPE%26applied_filter_name%3DTipo+de+combustible%26applied_filter_order%3D10%26applied_value_id%3D60406%26applied_value_name%3DDi%C3%A9sel%26applied_value_order%3D1%26applied_value_results%3D3%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Diesel</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_FUEL*TYPE_403613_NoIndex_True#applied_filter_id%3DFUEL_TYPE%26applied_filter_name%3DTipo+de+combustible%26applied_filter_order%3D10%26applied_value_id%3D403613%26applied_value_name%3DEl%C3%A9ctrico%26applied_value_order%3D2%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Eléctrico</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Puertas</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_DOORS_3-3_NoIndex_True#applied_filter_id%3DDOORS%26applied_filter_name%3DPuertas%26applied_filter_order%3D11%26applied_value_id%3D%5B3-3%5D%26applied_value_name%3D3%26applied_value_order%3D1%26applied_value_results%3D2%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>3</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_DOORS_4-4#applied_filter_id%3DDOORS%26applied_filter_name%3DPuertas%26applied_filter_order%3D11%26applied_value_id%3D%5B4-4%5D%26applied_value_name%3D4%26applied_value_order%3D2%26applied_value_results%3D23%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>4</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_DOORS_5-5#applied_filter_id%3DDOORS%26applied_filter_name%3DPuertas%26applied_filter_order%3D11%26applied_value_id%3D%5B5-5%5D%26applied_value_name%3D5%26applied_value_order%3D3%26applied_value_results%3D22%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>5</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Transmisión</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_TRANSMISSION_370877#applied_filter_id%3DTRANSMISSION%26applied_filter_name%3DTransmisi%C3%B3n%26applied_filter_order%3D12%26applied_value_id%3D370877%26applied_value_name%3DManual%26applied_value_order%3D2%26applied_value_results%3D43%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Manual</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_TRANSMISSION_370876#applied_filter_id%3DTRANSMISSION%26applied_filter_name%3DTransmisi%C3%B3n%26applied_filter_order%3D12%26applied_value_id%3D370876%26applied_value_name%3DAutom%C3%A1tica%26applied_value_order%3D1%26applied_value_results%3D4%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-2'>Automática</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Color</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_52053#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D52053%26applied_value_name%3DPlateado%26applied_value_order%3D7%26applied_value_results%3D11%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Plateado</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_283165#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D283165%26applied_value_name%3DGris%26applied_value_order%3D4%26applied_value_results%3D11%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Gris</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_52055#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D52055%26applied_value_name%3DBlanco%26applied_value_order%3D2%26applied_value_results%3D8%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Blanco</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_52049#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D52049%26applied_value_name%3DNegro%26applied_value_order%3D6%26applied_value_results%3D8%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Negro</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_52028#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D52028%26applied_value_name%3DAzul%26applied_value_order%3D1%26applied_value_results%3D4%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Azul</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_51993_NoIndex_True#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D51993%26applied_value_name%3DRojo%26applied_value_order%3D8%26applied_value_results%3D2%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Rojo</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_52014_NoIndex_True#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D52014%26applied_value_name%3DVerde%26applied_value_order%3D9%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Verde</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_52005_NoIndex_True#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D52005%26applied_value_name%3DMarr%C3%B3n%26applied_value_order%3D5%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Marron</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_COLOR_283164_NoIndex_True#applied_filter_id%3DCOLOR%26applied_filter_name%3DColor%26applied_filter_order%3D13%26applied_value_id%3D283164%26applied_value_name%3DDorado%26applied_value_order%3D3%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet'>Dorado</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Dirección</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_STEERING_370874#applied_filter_id%3DSTEERING%26applied_filter_name%3DDirecci%C3%B3n%26applied_filter_order%3D14%26applied_value_id%3D370874%26applied_value_name%3DHidr%C3%A1ulica%26applied_value_order%3D3%26applied_value_results%3D33%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Hidráulica</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_STEERING_405719#applied_filter_id%3DSTEERING%26applied_filter_name%3DDirecci%C3%B3n%26applied_filter_order%3D14%26applied_value_id%3D405719%26applied_value_name%3DEl%C3%A9ctrica%26applied_value_order%3D2%26applied_value_results%3D6%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Eléctrica</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_STEERING_370873#applied_filter_id%3DSTEERING%26applied_filter_name%3DDirecci%C3%B3n%26applied_filter_order%3D14%26applied_value_id%3D370873%26applied_value_name%3DAsistida%26applied_value_order%3D1%26applied_value_results%3D4%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Asistida</li>
                    </Link>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Tracción</h3>
                  <ul>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_TRACTION*CONTROL_493979#applied_filter_id%3DTRACTION_CONTROL%26applied_filter_name%3DControl+de+tracci%C3%B3n%26applied_filter_order%3D17%26applied_value_id%3D493979%26applied_value_name%3DDelantera%26applied_value_order%3D3%26applied_value_results%3D44%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>Delantera</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_NoIndex_True_TRACTION*CONTROL_370879#applied_filter_id%3DTRACTION_CONTROL%26applied_filter_name%3DControl+de+tracci%C3%B3n%26applied_filter_order%3D17%26applied_value_id%3D370879%26applied_value_name%3D4x2%26applied_value_order%3D1%26applied_value_results%3D2%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>4x2</li>
                    </Link>
                    <Link to="https://vehiculos.mercadolibre.com.ar/_CustId_136444243_NoIndex_True_TRACTION*CONTROL_370880#applied_filter_id%3DTRACTION_CONTROL%26applied_filter_name%3DControl+de+tracci%C3%B3n%26applied_filter_order%3D17%26applied_value_id%3D370880%26applied_value_name%3D4x4%26applied_value_order%3D2%26applied_value_results%3D1%26is_custom%3Dfalse">
                      <li className='font-sans transition-colors duration-300 hover:text-dimViolet mb-1'>4x4</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehiculos;
