import "./Tile.css";

export const Tile = (props) => {
  return (
    <button className="tile" onClick={() => props.onClick(props.value)}>
      {props.value}
    </button>
  );
};
