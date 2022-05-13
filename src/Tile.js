import "./Tile.css";

export const Tile = (props) => {
  return (
    <button
      className="tile"
      onClick={() => props.onClick({ id: props.id, value: props.value })}
    >
      {props.value}
    </button>
  );
};
