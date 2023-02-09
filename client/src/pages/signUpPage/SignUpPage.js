import Navbar from "../../components/navbar/navbar"
import SignUpForm from "../../components/signUpForm/SignUpForm";
import './SignUpPage.css';
import Footer from '../../components/footer/footer';



const SignUpPage = () => {

    return (
        <div id="signup-main-container">
            <Navbar />
            <div id="form-content">
                <h2 data-cy="form-header">Sign Up</h2>
                <SignUpForm />
            </div>
            <Footer />
        </div>
    )
}

export default SignUpPage;
