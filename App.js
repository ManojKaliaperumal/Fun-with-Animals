import "./styles.css";
import React, { useState } from "react";

var animalDictionary = {
  "🐒": "Monkey",
  "🐢": "Tortoise",
  "🦖": "Dinosaur",
  "🐘": "Elephants",
  "🐕": "Dog",
  "🐈": "Cat",
  "🦕": "Giraffe"
};

var animalWeKnow = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);

    if (userInput === "") {
      var meaning = "";
    } else {
      var meaning = animalDictionary[userInput];
    }
    if (meaning === undefined) {
      meaning = "Oops.. It's currently not available";
    }
    setMeaning(meaning);
  }

  function animalClickHandler(emoji) {
    var meaning = animalDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="main">
      <h1> Fun with Animals </h1>

      <input
        class="placehandler"
        placeholder="Put your emoji here"
        onChange={animalInputHandler}
      />

      <h2 style={{ color: "red" }}> {meaning} </h2>
      <h3> Quick Select </h3>
      {animalWeKnow.map(function (emoji) {
        return (
          <span
            id="emoji-span"
            onClick={() => animalClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
