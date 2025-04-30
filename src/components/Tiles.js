// import './Tiles.css';
import Tile from './Tile';

function Tiles() {
  const tiles = [];

  for (let i=0; i<64; i++) {
    tiles.push(<Tile key={i} />)
  }

  return (
    <>
    {tiles}
    </>
  );
}

export default Tiles;