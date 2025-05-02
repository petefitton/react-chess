// import './Table.css';
import Board from './Board';

function Table({ piecePlacement, handleTileClick }) {
  return (
    <>
      <Board piecePlacement={piecePlacement} handleTileClick={handleTileClick} />
    </>
  );
}

export default Table;