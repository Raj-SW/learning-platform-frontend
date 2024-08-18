import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './Components/HomePage/HomePage.jsx';
import LoginForm from './Components/LoginForm/LoginForm.jsx';
import RegisterForm from './Components/RegisterForm/RegisterForm.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm/>,
      },
      {
        path: "landingpage",
        element: <LandingPage/>,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
   
);
