import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {path:"/login" ,Component:LoginForm},
        {path:"/register",Component:RegisterForm}
    ]
  },
]);