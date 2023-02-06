import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUpPage from './pages/signUpPage/SignUpPage';
import LoginPage from './pages/loginPage/LoginPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      {/* <App /> */}
      <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
