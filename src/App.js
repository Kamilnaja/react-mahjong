import "./App.css";
import { Tile } from "./Tile";

function App() {
  const initialData = ["🀃", "🀆", "🀆", "🀇", "🀙", "🀃", "🀆", "🀆", "🀇", "🀙"];

  let clickedItems = [];

  function onClick(value) {
    clickedItems.push(value);

    if (clickedItems.length <= 2) {
      console.log(compareItems(clickedItems[0], clickedItems[1]));
    } else {
      clickedItems.length = 0;
    }
  }

  function compareItems(item1, item2) {
    return item1 === item2;
  }

  return (
    <ul className="App">
      {initialData.map((item, idx) => (
        <li key={idx}>
          <Tile value={item} onClick={onClick}></Tile>
        </li>
      ))}
    </ul>
  );
}

export default App;
