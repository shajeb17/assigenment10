import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home/Home";
import Addhabit from "../pages/Addhabit";
import Myhabit from "../pages/Home/Myhabit";
import Publichabit from "../pages/Home/Publichabit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {index:true,Component:Home},
        {path:"/addhabit",element:<Addhabit></Addhabit>},
        {path:"/myhabit",element:<Myhabit></Myhabit>},
        {path:"/publichabit",element:<Publichabit></Publichabit>},
        {path:"/login" ,Component:LoginForm},
        {path:"/register",Component:RegisterForm}
    ]
  },
]);