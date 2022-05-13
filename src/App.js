import "./App.css";
import { Tile } from "./Tile";
import { useEffect, useState } from "react";

function App() {
  const [initialTiles, removeTile] = useState([
    "🀃",
    "🀆",
    "🀆",
    "🀇",
    "🀙",
    "🀃",
    "🀆",
    "🀆",
    "🀇",
    "🀙",
  ]);
  useEffect(() => {
    if (!initialTiles.length) {
      console.log("You won!");
    }
  });
  const clickedItems = [];

  function onClick(value) {
    if (!clickedItems.some((item) => item.id === value.id)) {
      clickedItems.push(value);
    }

    if (clickedItems.length <= 2) {
      if (compareItems(clickedItems[0]?.value, clickedItems[1]?.value)) {
        removeTile(
          initialTiles.filter(
            (_, idx) => ![clickedItems[0].id, clickedItems[1].id].includes(idx)
          )
        );
      }
    } else {
      clickedItems.length = 0;
    }
  }

  function compareItems(item1, item2) {
    return item1 === item2;
  }

  return (
    <ul className="App">
      {initialTiles.map((item, idx) => (
        <li key={idx}>
          <Tile value={item} id={idx} onClick={onClick}></Tile>
        </li>
      ))}
    </ul>
  );
}

export default App;
