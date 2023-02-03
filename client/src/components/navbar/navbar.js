import './navbar.css'
import logo from './logo-dark-removebg-preview.png'

const Navbar = () => {
    return (
        <nav data-cy="navbar">
            <div className="logo-container">
             <img src={logo} alt="logo" className="logo" />
            </div>
           <div className="buttons-container"> 
            <button data-cy="filter-button">Filter</button>
            <button data-cy="login-button">Login</button>
            <button data-cy="signup-button">Sign Up</button>
            </div>
        </nav>
    )
    
}


export default Navbar;