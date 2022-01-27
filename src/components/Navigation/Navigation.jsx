import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Expense Manager
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <NavLink style={{ all: "unset" }} to="/">
                    Home
                  </NavLink>
                </a>
              </li>
              {isAuthenticated && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <NavLink style={{ all: "unset" }} to="/expense">
                        Manager
                      </NavLink>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a class="nav-link" href="">
                      <NavLink style={{ all: "unset" }} to="/profile">
                        Profile
                      </NavLink>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <NavLink style={{ all: "unset" }} to="/stats">
                        Stats
                      </NavLink>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <NavLink
                        onClick={() => {
                          logout();
                        }}
                        style={{ all: "unset" }}
                        to="/login"
                      >
                        Logout
                      </NavLink>
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item">
                {!isAuthenticated && (
                  <a className="nav-link" href="">
                    <NavLink style={{ all: "unset" }} to="/login">
                      Login
                    </NavLink>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
