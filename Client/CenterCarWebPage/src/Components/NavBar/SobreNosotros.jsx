import { Link } from 'react-router-dom';

const SobreNosotros = () => {
    return (
        <div className='mr-4'>
            <Link to="/SobreNosotros" className='text-white font-sans'>
                <b>Sobre Nosotros</b>
            </Link>
        </div>
    )
}

export default SobreNosotros;