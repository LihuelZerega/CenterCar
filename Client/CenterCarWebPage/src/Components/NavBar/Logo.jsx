import { Link } from 'react-router-dom';
import LogoImage from '../../../Images/CenterCarLogo.png';

const Logo = () => {
    return (
            <Link to="/">
                <img className="h-9 w-auto" src={LogoImage} alt="Logo" />
            </Link>
    )
}

export default Logo;