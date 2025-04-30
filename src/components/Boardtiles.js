// import './Boardtiles.css';
import Boardtile from './Boardtile';

function Boardtiles() {
  const boardtiles = [];

  for (let i=0; i<64; i++) {
    boardtiles.push(<Boardtile key={i} />)
  }

  return (
    <>
    {boardtiles}
    </>
  );
}

export default Boardtiles;