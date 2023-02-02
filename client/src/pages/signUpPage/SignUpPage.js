import Navbar from "../../components/navbar/Navbar"
import SignUpForm from "../../components/signUpForm/SignUpForm";


const SignUpPage = () => {

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <h2 data-cy="form-header">Sign Up</h2>
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpPage;