import './Tile.css';

function Tile(props) {
  return (
    props.isWhite ?
    <div className="tile white" id={props.id} onClick={(event) => props.handleTileClick(event.target.id)}>{props.children}</div>
    :
    <div className="tile black" id={props.id} onClick={(event) => props.handleTileClick(event.target.id)}>{props.children}</div>
  );
}

export default Tile;