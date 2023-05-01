import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState(memesData);

  function getMemeImg() {
    const memesArray = allMemes.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const memeImgUrl = memesArray[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memeImgUrl,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <>
      <main className="main">
        <div className="form">
          <input
            className="form--input"
            type="text"
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />

          <input
            className="form--input"
            type="text"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />

          <button onClick={getMemeImg} className="form--button">
            Get a new meme image 🖼
          </button>
        </div>
        <div className="meme--img">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
        </div>
      </main>
    </>
  );
}
export default Meme;
