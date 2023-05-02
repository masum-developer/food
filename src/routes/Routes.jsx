import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/chefs')
        },
        {
            path:'recipe/:id',
            element:<ChefRecipe></ChefRecipe>,
            loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
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
        }
      ]
    },
  ]);

export default router;