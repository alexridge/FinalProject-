import Navbar from "../../components/navbar/Navbar"
import SignUpForm from "../../components/signUpForm/SignUpForm";
import './SignUpPage.css';


const SignUpPage = () => {

    return (
        <div id="main-container">
            <Navbar />
            <div id="form-content">
                <h2 data-cy="form-header">Sign Up</h2>
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpPage;