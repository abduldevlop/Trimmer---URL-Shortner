import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import AuthPage from "./pages/AuthPage";
import LinkPage from "./pages/LinkPage";
import RedirectLinkPage from "./pages/RedirectLinkPage";
import UrlProvider from "./context/Context";
import ProtectedRoute from "./components/ui/ProtectedRoute";

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
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/auth",
          element: <AuthPage />,
        },
        {
          path: "/link/:id",
          element: (
            <ProtectedRoute>
              <LinkPage />,
            </ProtectedRoute>
          ),
        },
        {
          path: "/:id",
          element: <RedirectLinkPage />,
        },
      ],
    },
  ]);
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
};

export default App;
