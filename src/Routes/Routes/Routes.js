import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TermsCondition from "../../Pages/TermsCondition/TermsCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch(`https://world-news-server-kohl.vercel.app/news`),
        element: <Home></Home>,
      },
      {
        //   dynamic id
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://world-news-server-kohl.vercel.app/category/${params.id}`
          ),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`https://world-news-server-kohl.vercel.app/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsCondition></TermsCondition>,
      },
    ],
  },
]);
