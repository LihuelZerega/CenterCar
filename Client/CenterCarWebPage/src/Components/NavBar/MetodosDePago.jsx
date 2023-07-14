import { Link } from 'react-router-dom';

const MetodosDePago = () => {
    return (
        <div className='mr-4'>
            <Link to="/MetodosDePago" className='text-white font-sans'>
                <b>Metodos de Pago</b>
            </Link>
        </div>
    )
}

export default MetodosDePago;