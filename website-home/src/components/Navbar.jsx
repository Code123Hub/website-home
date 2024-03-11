import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div className="navbar">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/about">About</Link>
      <Link to="/agenda">Agenda</Link>
      <a href="#testimonials">Testimonials</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#events">Past Events</a>
      <a href="#contact">Contact</a>

      <a href="javascript:void(0);" className="icon" onClick={() => myFunc()}>
        <FontAwesomeIcon icon={faBriefcase} />
      </a>
      <div className="nav-div">
        <button>LOGIN</button>
        <button>REGISTER</button>
      </div>
    </div>
  );
};

export default Navbar;
