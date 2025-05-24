import { CgEnter } from "react-icons/cg";

interface Props {
  event: {
    id: number;
    title: string;
    description: string;
    date: string;
    venue: string;
  };
}

function EventCard({ event }: Props) {
  const { title, date, venue, description } = event;

  return (
    <div
      style={{
        background: "#CBC3E3",
        color: "#111",
        borderRadius: "16px",
        marginBottom: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        padding: "2.5rem",
        boxSizing: "border-box",
        border: "8px solid #563BFF",
        boxShadow:
          "0 0 12px #563BFF, 0 0 24px #563BFF, 0 0 48px #563BFF, 0 4px 24px rgba(102, 50, 134, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-4px) scale(1.02)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 24px #563BFF, 0 0 48px #563BFF, 0 0 96px #563BFF, 0 8px 32px rgba(102, 50, 134, 0.15)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "none";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 12px #563BFF, 0 0 24px #563BFF, 0 0 48px #563BFF, 0 4px 24px rgba(102, 50, 134, 0.1)";
      }}
    >
      <h2
        style={{
          margin: 0,
          marginBottom: "0rem",
          fontWeight: 700,
          fontSize: "2rem",
          color: "#111",
          letterSpacing: "0.5px",
          textAlign: "center",

          fontFamily: "HeadFont, sans-serif",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: "0.25rem 0",
          fontWeight: 500,
          fontFamily: "Canela1, serif",
          fontSize: "1rem",
        }}
      >
        <span style={{ color: "#39FF14" }}>📅</span>{" "}
        {new Date(date).toLocaleString()}
      </p>
      <p
        style={{
          margin: "0.25rem 0",
          fontWeight: 500,
          fontFamily: "Canela1, serif",
          fontSize: "1rem",
        }}
      >
        <span style={{ color: "#39FF14" }}>📍</span> {venue}
      </p>
      <p
        style={{
          marginTop: "0.75rem",
          color: "#222",
          fontSize: "1rem",
          lineHeight: 1.6,
          fontWeight: 400,
          fontFamily: "Canela, serif",
          fontSize: "1.5rem",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default EventCard;
