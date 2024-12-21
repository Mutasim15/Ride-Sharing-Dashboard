import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import RegistrationForm from "../Components/RegistrationForm";
import AdminDashboard from "../Components/AdminDashboard";
import DriverDashboard from "../Components/DriverDashboard";
import LoginForm from "../Components/LoginForm";

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

        path:'/registration',
        element:<RegistrationForm></RegistrationForm>
    },
    {
        path:'/',
        element:<LoginForm></LoginForm>
    },
    {
        path:'/adminlogin',
        element:<LoginForm></LoginForm>
    },
    {
        path:'/admin-dashboard',
        element:<AdminDashboard></AdminDashboard>
    },
    {
        path:'/driver-dashboard',
        element:<DriverDashboard></DriverDashboard>
    }
])

export default router;