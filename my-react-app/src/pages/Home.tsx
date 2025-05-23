import React, { useEffect, useState } from "react";
import BackgroundVideo from "../components/bgvid";
import Marquee from "react-fast-marquee";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import sarcLogo from "../assets/sarcbw.png";
import PortfolioCard from "../components/PortfolioCard";
import HomeNav from "../components/homenav";
import treeImg from "../assets/tree.png";
import { motion } from "framer-motion";

const techPortfolios = ["Design", "Marketing", "Media and PR", "Web"];
const nonTechPortfolios = ["ASMP", "HDA", "Operations", "Events"];

function PortfoliosSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        maxWidth: "1100px",
        margin: "0.5rem auto",
        gap: "2rem",
      }}
    >
      {/* Tech Column */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "0.5rem",
            color: "white",
            fontFamily: "canela, sans-serif",
            fontWeight: 700,
            fontSize: "3.7rem",
            textAlign: "center",
            letterSpacing: "1px",
            width: "100%",
          }}
        >
          TECH
        </div>
        {techPortfolios.map((title, idx) => (
          <PortfolioCard key={title} title={title} direction="left" />
        ))}
      </div>
      {/* Non-Tech Column */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "0.5rem",
            color: "white",
            fontFamily: "canela, sans-serif",
            fontWeight: 700,
            fontSize: "3.7rem",
            textAlign: "center",
            letterSpacing: "1px",
            width: "100%",
          }}
        >
          NON TECH
        </div>
        {nonTechPortfolios.map((title, idx) => (
          <PortfolioCard key={title} title={title} direction="right" />
        ))}
      </div>
    </div>
  );
}

const marqueeText = "Connecting students and alumni across generations...";
const Footer = () => (
  <footer
    style={{
      backgroundColor: "#563BFF",
      color: "white",
      textAlign: "center",
      borderTop: "2px solid #fff",
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
          minWidth: "500px",
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
            fontFamily: "HeadFont, sans-serif",
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>
      {/* Bottom Marquee */}
      <div
        style={{
          width: "100vw",
          minWidth: "500px",
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
            fontFamily: "HeadFont, sans-serif",
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>
    </div>
  </footer>
);

function Home() {
  const [showHeading, setShowHeading] = useState(false);
  const [showPortfolios, setShowPortfolios] = useState(false);
  const [showTreeBg, setShowTreeBg] = useState(false);

  useEffect(() => {
    const timerTree = setTimeout(() => setShowTreeBg(true), 4000);
    const timer1 = setTimeout(() => setShowHeading(true), 4000);
    const timer2 = setTimeout(() => setShowPortfolios(true), 4000);
    return () => {
      clearTimeout(timerTree);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
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
          .animated-heading {
            font-family: 'Canela1', 'HeadFont', sans-serif;
            font-size: 5rem;
            font-weight: bold;
            text-align: center;
            margin-top: 5rem;
            margin-bottom: -17rem;
            color: white;
            transition: opacity 0.8s;
            line-height: 1.15;
            letter-spacing: 1px;
            opacity: 1;
          }
          .animated-heading.hide {
            opacity: 0;
            pointer-events: none;
          }
          .portfolios-animated {
            font-family: 'HeadFont', sans-serif;
            margin-bottom: 0rem;
            font-size: 5rem;
            font-weight: bold;
            text-align: center;
            margin: 25rem 0 0.5rem 0;
            animation: colorChange 6s linear infinite;
            animation-delay: 4s;
            transition: opacity 0.8s, color 1s ease-in-out;
            line-height: 1.1;
            letter-spacing: 1px;
            opacity: 1;
          }
          .portfolios-animated.hide {
            opacity: 0;
            pointer-events: none;
          }
          @media (max-width: 600px) {
            .animated-heading {
              font-size: 2rem;
            }
            .portfolios-animated {
              font-size: 2.8rem;
            }
          }
        `}
      </style>

      <HomeNav />

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          padding: "2rem",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Background video always visible */}
        <BackgroundVideo
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            objectFit: "cover",
          }}
        />

        {/* Framer Motion fade-in tree image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showTreeBg ? 1 : 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${treeImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Content always above both backgrounds */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className={`animated-heading${showHeading ? "" : " hide"}`}>
            Bridging the gap between students and alumni
          </h1>
          <h2 className={`portfolios-animated${showPortfolios ? "" : " hide"}`}>
            PORTFOLIOS
          </h2>
        </div>
      </div>

      <PortfoliosSection />
      <Footer />
    </>
  );
}

export default Home;
