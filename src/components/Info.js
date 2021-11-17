import React from "react";
function Info() {
  return (
    <div
      style={{
        backgroundColor: "#1A1B21",
        width: "317px",
        textAlign: "center",
        fontFamily: "Inter",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "25px",
          fontWeight: "bold",
          lineHeight: "30px",
        }}
      >
        Abdullah Hussein
      </h2>
      <p
        style={{
          color: "#F3BF99",
          fontSize: "12.8px",
          lineHeight: "15px",
          fontWeight: "normal",
        }}
      >
        Web Developer
      </p>

      <button
        style={{
          background: "#FFFFFF",
          border: "1px solid #D1D5DB",
          boxSizing: "border-box",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "6px",
          width: "247px",
          padding: "9px 13px 9px 11px",
        }}
      >
        Email
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          margin: "0px 36px",
        }}
      >
        <h3
          style={{
            color: "#F5F5F5",
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "150%",
            alignItems: "start",
            marginBottom: "0px",
          }}
        >
          About
        </h3>
        <p
          style={{
            color: "#DCDCDC",
            textAlign: "start",
            fontSize: "10.24px",
          }}
        >
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>

        <h3
          style={{
            color: "#F5F5F5",
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "150%",
            alignItems: "start",
            marginBottom: "0px",
          }}
        >
          Interests
        </h3>
        <p
          style={{
            color: "#DCDCDC",
            textAlign: "start",
            fontSize: "10.24px",
            marginBottom: "24px",
          }}
        >
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default Info;
