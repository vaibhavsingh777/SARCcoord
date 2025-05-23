import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import sarcLogo from "../assets/sarcbw.png";
import HomeNav from "../components/homenav";
import treeImg from "../assets/tree.png";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  venue: string;
}

const marqueeText = "Connecting students and alumni across generations...";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#563BFF",
      color: "white",
      textAlign: "center",
      padding: "0.5rem 0 0 0",
      position: "relative",
      bottom: 0,
      width: "100%",
      marginTop: "2rem",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      fontWeight: "500",
      fontSize: "clamp(1rem, 2vw, 1.2rem)",
      boxSizing: "border-box",
      maxWidth: "100vw",
      overflow: "hidden",
      minHeight: "7rem",
      display: "block",
    }}
  >
    {/* Flex row: logo + contact */}
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "1.5rem 2vw 1rem 2vw",
      }}
    >
      {/* Logo on the left, slightly higher */}
      <div style={{ flex: "0 0 auto", marginTop: "0.35rem" }}>
        <img
          src={sarcLogo}
          alt="SARC Logo"
          style={{ height: "64px", width: "auto", borderRadius: "8px" }}
        />
      </div>

      {/* Contact Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "1.15rem",
          textAlign: "left",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FaMapMarkerAlt size={24} />
          <span>SARC Room, SAC, IITB</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FaPhoneAlt size={24} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Arush Srivastav: +91 9005549919</span>
            <span>Khushi Yadav: +91 8930097733</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FaEnvelope size={24} />
          <a
            href="mailto:web@sarc-iitb.org"
            style={{ color: "#cfc1ff", textDecoration: "underline" }}
          >
            web@sarc-iitb.org
          </a>
        </div>
      </div>
    </div>

    {/* Marquees centered and full width, below the flex row */}
    <div style={{ width: "100%", marginTop: "0.5rem" }}>
      {/* Top Marquee */}
      <div
        style={{
          width: "100vw",
          minWidth: "1000px",
          maxWidth: "20000px",
          margin: "0 auto",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(86,59,255,0.10)",
          transform: "rotate(-3deg)",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Marquee
          direction="right"
          gradient={false}
          speed={35}
          style={{
            color: "#563BFF",
            fontWeight: 700,
            fontSize: "1.1em",
            padding: "0.25rem 0",
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>
      {/* Bottom Marquee */}
      <div
        style={{
          width: "100vw",
          minWidth: "1000px",
          maxWidth: "20000px",
          margin: "-1.5rem auto 0 auto",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(86,59,255,0.10)",
          transform: "rotate(3deg)",
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Marquee
          direction="right"
          gradient={false}
          speed={35}
          style={{
            color: "#563BFF",
            fontWeight: 700,
            fontSize: "1.1em",
            padding: "0.25rem 0",
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>
    </div>
  </footer>
);

function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/events/")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#111",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000", // Black background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Centered, semi-transparent tree image */}
      <img
        src={treeImg}
        alt="Tree"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "4000px", // Adjust as needed
          maxWidth: "93vw",
          height: "auto",
          opacity: 0.9, // Subtle effect
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Content (zIndex: 1) */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HomeNav />
        {/* Animation and font styles for the heading */}
        <style>
          {`
            @keyframes colorChange {
              0% { color: yellow; }
              20% { color: green; }
              40% { color: blue; }
              60% { color: purple; }
              80% { color: red; }
              100% { color: yellow; }
            }
            .events-heading {
              font-family: 'HeadFont', sans-serif;
              font-size: 3rem;
              font-weight: bold;
              text-align: center;
              margin-bottom: 2rem;
              animation: colorChange 6s linear infinite;
              transition: color 1s ease-in-out;
              line-height: 1.15;
              letter-spacing: 1px;
              width: 100%;
            }
            @media (max-width: 600px) {
              .events-heading {
                font-size: 2rem;
              }
            }
          `}
        </style>

        <div style={{ padding: "2rem", flex: 1 }}>
          <h1 className="events-heading">Upcoming Events</h1>
          <div>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Events;
