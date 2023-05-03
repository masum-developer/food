import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://chef-recipe-server-masum-developer.vercel.app/chefs')
        },
        {
            path:'recipe/:id',
            element:<PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
            loader:({params})=>fetch(`https://chef-recipe-server-masum-developer.vercel.app/chefs/${params.id}`)
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },

        {
            path:'blog',
            element:<Blog></Blog>
        },
        {
          path:'terms',
          element:<Terms></Terms>
        }
      ]
    },
  ]);

export default router;