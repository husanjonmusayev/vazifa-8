import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Movi from "./pages/Movi/Movi";
import Seris from "./pages/Seris/Seris";
import Home from "./pages/Home/Home.jsx";
import MainLayout from "./pages/MainLayout/MainLayout.jsx";

function App() {
  const location = useLocation();
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      !storedUser &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      navigate("/login");
    }
  }, [location.pathname, navigate]);

  const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) => {
    useEffect(() => {
      if (!isAuthentication) {
        navigate(redirectTo);
      }
    }, [isAuthentication, navigate, redirectTo]);

    return isAuthentication ? children : null;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <Home />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/seris"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <Seris />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/movi"
        element={
          <ProtectedRoute isAuthentication={user} redirectTo="/login">
            <MainLayout>
              <Movi />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
