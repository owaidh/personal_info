import React from "react";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#23252C",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Banner />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
