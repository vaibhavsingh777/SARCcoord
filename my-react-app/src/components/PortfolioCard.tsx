import React from "react";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  direction: "left" | "right";
  children?: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  direction,
  children,
}) => (
  <motion.div
    initial={{
      opacity: 0,
      x: direction === "left" ? -300 : 300, // Start far left or right
    }}
    whileInView={{
      opacity: 1,
      x: 0, // Animate to center
    }}
    viewport={{ once: false, amount: 0.3 }} // Animate every time it scrolls into view
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      background: "#D3D3D3",
      color: "#111",
      borderRadius: "18px",
      boxShadow: "0 6px 32px rgba(86,59,255,0.18)",
      padding: "3rem 2.5rem",
      margin: "1.5rem 3rem",
      minWidth: "360px",
      maxWidth: "460px",
      minHeight: "75px",
      fontFamily: "HeadFont, sans-serif",
      fontWeight: 700,
      fontSize: "2.6rem", // Increased uniform font size for all text
      textAlign: "center",
      letterSpacing: "1px",
    }}
  >
    {title}
    {children}
  </motion.div>
);

export default PortfolioCard;
