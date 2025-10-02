import React from "react";

const RotatingCards: React.FC = () => {
  return (
    <div className="wrapper">
      <div
        className="inner"
        style={{ ["--quantity" as string]: 10 } as React.CSSProperties}
      >
        <div
          className="font-fredoka text-white text-[40px] font-bold"
          style={{
            transform: "translateY(-120px) rotateY(0deg)",
          }}
        >
          Prediction Ready
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 0,
              ["--color-card" as string]: "142, 249, 252",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 1,
              ["--color-card" as string]: "142, 252, 204",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 2,
              ["--color-card" as string]: "142, 252, 157",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 3,
              ["--color-card" as string]: "215, 252, 142",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 4,
              ["--color-card" as string]: "252, 252, 142",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 5,
              ["--color-card" as string]: "252, 208, 142",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 6,
              ["--color-card" as string]: "252, 142, 142",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 7,
              ["--color-card" as string]: "252, 142, 239",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 8,
              ["--color-card" as string]: "204, 142, 252",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
        <div
          className="card"
          style={
            {
              ["--index" as string]: 9,
              ["--color-card" as string]: "142, 202, 252",
            } as React.CSSProperties
          }
        >
          <div className="img"></div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCards;
