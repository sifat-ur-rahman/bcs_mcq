import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import McqForm from "../Pages/McqForm/McqForm";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/addMCQ",
          element: <McqForm />,
        },

        {
          path: "*",
          element: <ErrorPage/ >
        },
      ],
    },
  ]);