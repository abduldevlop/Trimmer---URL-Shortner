import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import AuthPage from "./pages/AuthPage";
import LinkPage from "./pages/LinkPage";
import RedirectLinkPage from "./pages/RedirectLinkPage";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
        {
          path: "/auth",
          element: <AuthPage />,
        },
        {
          path: "/link/:id",
          element: <LinkPage />,
        },
        {
          path: "/:id",
          element: <RedirectLinkPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
