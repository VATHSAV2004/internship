import './index.css'
import {Link} from 'react-router-dom'
const Header=()=>{return (
    <div className="header-css">
        <h1 className="logo-css">Uni Project</h1>
        <div className="anchors-container-css">
            <Link className='linkcss' to="/Home">Home</Link>
            <Link className='linkcss' to="/Projects">Universities/Research</Link>
            <Link className='linkcss' to="/Login">Login</Link>
            <Link className='linkcss' to="/About">About</Link>
            <Link className='linkcss' to="/DeveloperDetails">Developer Details</Link>
        </div>
    </div>
);
}
export default Header;