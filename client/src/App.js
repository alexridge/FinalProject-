import "./App.css";
import {Route, Routes} from 'react-router-dom'
import SignUpPage from "./pages/signUpPage/SignUpPage";

function App() {
  return (
    <main>
      {/* <Switch>
        <Route path="/signup" element={<SignUpPage />} />
      </Switch> */}
      <SignUpPage />
    </main>
  )
}

export default App;
