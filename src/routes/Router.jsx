import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import RegistrationForm from "../Components/RegistrationForm";
import AdminDashboard from "../Components/AdminDashboard";
import DriverDashboard from "../Components/DriverDashboard";
import LoginForm from "../Components/LoginForm";
import LoginPage from "../Components/Home Container/Login Page/LoginPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           }
        ]

    },
    {
        path:"/loginpage",
        element:<LoginPage></LoginPage>
    }
    ,
    {

        path:'/registration',
        element:<RegistrationForm></RegistrationForm>
    },

    {
        path:'/adminlogin',
        element:<LoginForm></LoginForm>,
   
    },
    {
        path:'/driverlogin',
        element:<LoginForm></LoginForm>,
   
    },

    {
        path:'/admindashboard',
        element:<AdminDashboard></AdminDashboard>
    },

    {
        path:'/driverdashboard',
        element:<DriverDashboard></DriverDashboard>
    }
])

export default router;