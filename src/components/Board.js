// import './Board.css';
import Tiles from './Tiles';

function Board({ piecePlacement, handleTileClick }) {
  return (
    <>
      <Tiles piecePlacement={piecePlacement} handleTileClick={handleTileClick} />
    </>
  );
}

export default Board;