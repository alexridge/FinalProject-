import './navbar.css'
import logo from './logo-dark-removebg-preview.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav data-cy="navbar">
            <Link to="/">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                </div>
            </Link>
            <div className="buttons-container">
                <button data-cy="filter-button">Filter</button>
                <Link to='/login'><button data-cy="login-button">Login</button></Link>
                <Link to='/signup'><button data-cy="signup-button">Sign Up</button></Link>
            </div>
        </nav>
    )

}


export default Navbar;
