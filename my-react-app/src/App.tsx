import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import logo from "./assets/sarc.png";

// Custom NavLink component for active styling
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
