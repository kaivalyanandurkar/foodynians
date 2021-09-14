import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🧇": "Waffle",
  "🥨": "Pretzel",
  "🥓": " Bacon",
  "🌮": " Taco",
  "🌯": "Burrito",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍩": "Doughnut",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🦪": "Oyster",
  "🧈": "Butter",
  "🥐": "Croissant"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "OH! We don't have this in our database.";
    }
    // console.log(meaning)
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>foodynians</h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>

      <h3> emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
