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
      x: direction === "left" ? -300 : 300,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      background: "#D3D3D3",
      color: "#111",
      borderRadius: "18px",
      padding: "3rem 2.5rem",
      margin: "1.5rem 3rem",
      minWidth: "360px",
      maxWidth: "460px",
      minHeight: "75px",
      fontFamily: "HeadFont, sans-serif",
      fontWeight: 700,
      fontSize: "2.6rem",
      textAlign: "center",
      letterSpacing: "1px",
      border: "3px solid #563BFF", // neon green border
      boxShadow:
        "0 0 8px #563BFF, 0 0 20px #563BFF, 0 0 30px #563BFF, 0 0 40px #563BFF", // glowing effect
    }}
  >
    {title}
    {children}
  </motion.div>
);

export default PortfolioCard;
