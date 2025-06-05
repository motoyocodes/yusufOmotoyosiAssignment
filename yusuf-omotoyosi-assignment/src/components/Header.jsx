import React from "react";

export default function Header({ logo }) {
  return (
    <header className="navbar">
      <div id="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}
