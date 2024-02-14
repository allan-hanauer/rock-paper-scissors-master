import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./sass/styles.css";
//COMPONENTS
import ErrorPage from "./pages/ErrorPage.tsx";
import ClassicGame from "./pages/ClassicGame.tsx";
import BonusGame from "./pages/BonusGame.tsx";

//Variables to main element
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ClassicGame />,
      },
      {
        path: "/bonusgame",
        element: <BonusGame />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
