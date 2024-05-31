import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPannel from "../pages/AdminPannel";
import AllUsers from "../pages/AllUsers";
import AllProduts from "../pages/AllProduts";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SearchProduct from "../pages/SearchProduct";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path:"",
            element:<Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path:"login",
          element:<Login />,
        },
        {
          path:"forgot-Password",
          element:<ForgotPassword/>,
        },
        {
          path:"sign-up",
          element:<SignUp />,
        },
        {
          path:"product-category",
          element:<CategoryProduct/>
        },
        {
          path:"product/:id",
          element:<ProductDetails/>,
        },
        {
          path:"cart",
          element:<Cart/>,

        },
        {
          path: "search",
          element:<SearchProduct/>,
        },
        {
          path:"admin-pannel",
          element:<AdminPannel/>,
          children: [
            {
              path:"all-users",
              element:<AllUsers />,
            },
            {
              path:"all-products",
              element:<AllProduts />,
            },
           
          ],
        }
    ]
  },
])

export default router;