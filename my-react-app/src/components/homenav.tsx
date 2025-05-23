import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/sarc.png"; // Adjust the path as needed

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      style={{
        color: isActive ? "#563BFF" : "white",
        background: isActive ? "white" : "transparent",
        padding: "0.5rem 1.2rem",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: 600,
        letterSpacing: "0.5px",
        fontSize: "clamp(1rem, 2vw, 1.1rem)",
        boxShadow: isActive ? "0 2px 8px rgba(86,59,255,0.08)" : "none",
        transition: "all 0.2s",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.background =
          "rgba(255,255,255,0.15)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.background = isActive
          ? "white"
          : "transparent";
      }}
    >
      {children}
    </Link>
  );
};

const HomeNav: React.FC = () => (
  <nav
    style={{
      backgroundColor: "#563BFF",
      border: "2px solid #fff", // Solid white border
      padding: "1rem 4vw",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      margin: "0rem auto 0 auto",
      width: "100%",
      maxWidth: "12000px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
      position: "relative",
      zIndex: 10,
      fontSize: "clamp(1rem, 2vw, 1.2rem)",
      boxSizing: "border-box",
      overflow: "hidden",
    }}
  >
    <img
      src={logo}
      alt="SARC, IIT Bombay Logo"
      style={{ height: "48px", borderRadius: "8px" }}
    />
    <div style={{ display: "flex", gap: "1rem" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events">Events</NavLink>
    </div>
  </nav>
);

export default HomeNav;
