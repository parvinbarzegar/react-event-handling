import React, { useState } from "react";

function App() {
  const [textHeasder, setTextHeader] = useState("Hello");

  function handleClick() {
    setTextHeader("Submmited");
  }
  const [isMouseOver, setStyle] = useState(false);
  function changeBackground() {
    setStyle(true);
  }

  function changeBack() {
    setStyle(false);
  }

  return (
    <div className="container">
      <h1>{textHeasder}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={changeBackground}
        onMouseLeave={changeBack}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
