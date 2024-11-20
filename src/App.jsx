import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { isLoggedIn, logout } from "./service/AuthService";
import M from "materialize-css";
import Login from "./components/Login";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    M.AutoInit(); // Initialize Materialize JavaScript components
    const loggedIn = isLoggedIn();
    setAuthenticated(loggedIn);

    if (!loggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    navigate("/login");
  };

  return (
    <div id="app">
      <nav className="light-blue accent-4" role="navigation">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Smartlife-Web
          </Link>
          <ul className="right hide-on-med-and-down">
            {authenticated ? (
              <li>
                <Link to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>

          <ul id="nav-mobile" className="sidenav">
            {authenticated ? (
              <li>
                <Link to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Define other routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
