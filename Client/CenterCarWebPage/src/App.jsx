import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.jsx'
import VehiculosPage from './Pages/Vehiculos/VehiculosPage.jsx'
import MetodosDePagoPage from './Pages/MetodosDePago/MetodosDePagoPage.jsx'
import SobreNosotrosPage from './Pages/SobreNosotros/SobreNosotrosPage.jsx'
import ContactoPage from './Pages/Contacto/ContactoPage.jsx'

function App() {
  return (
    <>
      <Link to='/'></Link>
      <Link to='/HomePage'></Link>
      <Link to="/Vehiculos"></Link>
      <Link to="/MetodosDepago"></Link>
      <Link to="/SobreNosotros"></Link>
      <Link to="/Contacto"></Link>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/HomePage' element={<HomePage/>} />
        <Route path='/Vehiculos' element={<VehiculosPage/>} />
        <Route path='/MetodosDepago' element={<MetodosDePagoPage/>} />
        <Route path='/SobreNosotros' element={<SobreNosotrosPage/>} />
        <Route path='/Contacto' element={<ContactoPage/>} />
      </Routes>
    </>
  )
}

export default App
