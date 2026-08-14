import { ImageResponse } from "next/og";

export const alt = "Ahesan Chowdhury — Java Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#050810",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -240,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: "rgba(56,189,248,0.18)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
            padding: 80,
          }}
        >
          <div
            style={{
              color: "#38bdf8",
              fontSize: 24,
              letterSpacing: 4,
            }}
          >
            SOFTWARE ENGINEER · JAVA BACKEND DEVELOPER
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 84,
              fontWeight: 700,
              color: "#e6edf8",
              lineHeight: 1.05,
            }}
          >
            Ahesan Chowdhury
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              color: "#9fb0c7",
            }}
          >
            Java · Spring Boot · REST APIs · Hibernate · MySQL · AWS S3
          </div>
          <div
            style={{
              marginTop: 64,
              height: 6,
              width: 240,
              background: "linear-gradient(90deg, #0ea5e9, #2563eb)",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
