import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Home from "../pages/Home/Home";
import Addhabit from "../pages/Addhabit";
import Myhabit from "../pages/Home/Myhabit";
import Publichabit from "../pages/Home/Publichabit";
import HabitDetails from "../pages/Home/HabitDetails";
import PrivateRouter from "../pirvateroute/PrivateRouter";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, Component: Home },
      {
        path: "/addhabit",
        element: (
          <PrivateRouter>
            <Addhabit></Addhabit>
          </PrivateRouter>
        ),
      },
      {
        path: "/myhabit",
        element: (
          <PrivateRouter>
            <Myhabit></Myhabit>
          </PrivateRouter>
        ),
      },
      { path: "/publichabit", element: <Publichabit></Publichabit> },
      {
        path: "/habitdetails",
        element: (
          <PrivateRouter>
            <HabitDetails></HabitDetails>
          </PrivateRouter>
        ),
      },
      { path: "/login", Component: LoginForm },
      { path: "/register", Component: RegisterForm },
    ],
  },
]);
