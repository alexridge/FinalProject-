import './navbar.css'

const Navbar = () => {

    return (
        <nav data-cy="navbar">
            <p>This Day In History</p>
            <button data-cy="login-button">Login</button>
            <button data-cy="filter-button">Filter</button>
            <button data-cy="signup-button">Sign Up</button>
        </nav>
        
    )
}


export default Navbar;