import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import { Auth0Provider } from "@auth0/auth0-react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Administration } from "./pages/Administration";
import { PaintFinder } from "./pages/PaintFinder";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "",
        element: (
          <div className="background-image">
            <Home />
          </div>
        ),
      },
      {
        path: "about",
        element: (
          <div className="background-image">
            <About />
          </div>
        ),
      },
      {
        path: "administration",
        element: (
          <ProtectedRoute>
            <div className="no-background-image">
              <Administration />
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: "paintFinder",
        element: (
          <ProtectedRoute>
            <div className="no-background-image">
              <PaintFinder />
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <div className="background-image">
              <Profile />
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: "welcomePage",
        element: (
          <ProtectedRoute>
            <div className="background-image">
              <WelcomePage />
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h3i7y85207cek8za.us.auth0.com"
      clientId="gkB7T3Dr8AhofwEyXDlnMMzoIYtLfQyW"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
