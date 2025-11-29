import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {index:true,Component:Home},
        {path:"/login" ,Component:LoginForm},
        {path:"/register",Component:RegisterForm}
    ]
  },
]);