import { HeadsetOff } from "@mui/icons-material";
import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header--img" src="../Images/Troll Face.png" alt="" />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course-Project 3</h4>
      </header>
    </>
  );
}

export default Header;
