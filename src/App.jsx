import React, { useState } from "react";

const style = {
  letter: {
    // Add some basic styling to the button
    padding: "5px 10px",
    margin: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    cursor: "pointer",
  },
};
function Tile({ letter, updateOutput, clickedLetters }) {
  const handleClick = () => {
    updateOutput(letter);
  };

  return (
    <button style={style.letter} onClick={handleClick}>
      {letter}
    </button>
  );
}

export function App() {
  const [output, setOutput] = useState("");
  const [clickedLetters, setClickedLetters] = useState([]);
  const [counter, setCounter] = useState(0); // Manage the counter state
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleTileClick = (letter) => {
    const lastClickedLetter = clickedLetters[clickedLetters.length - 1];

    if (lastClickedLetter !== letter) {
      // If letter is different, add it to output and reset counter
      setClickedLetters([...clickedLetters, letter]);
      setOutput(output + letter);
      setCounter(0); // Reset counter
    } else if (lastClickedLetter === letter && counter < 2) {
      // If letter is the same but counter is less than 2, add it to output and increment counter
      setClickedLetters([...clickedLetters, letter]);
      setOutput(output + letter);
      setCounter(counter + 1); // Increment counter
    } else if (lastClickedLetter === letter && counter === 2) {
      // If letter is the same and counter is 2, replace it with underscore and reset counter
      setOutput(output.substring(0, output.length - 3) + "_");
      setCounter(0); // Reset counter
    }
  };

  return (
    <div>
      <div>Output: {output}</div>
      {alphabet.map((letter, index) => (
        <Tile
          key={index}
          letter={letter}
          updateOutput={handleTileClick}
          clickedLetters={clickedLetters}
        />
      ))}
    </div>
  );
}
