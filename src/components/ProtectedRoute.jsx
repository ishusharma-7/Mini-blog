import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // User is not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // User is already logged in but tries to visit /login
  if (token && location.pathname === "/login") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
