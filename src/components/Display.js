// import './Display.css';
import Table from './Table';

function Display({ piecePlacement, handleTileClick }) {
  return (
    <>
      <Table piecePlacement={piecePlacement} handleTileClick={handleTileClick} />
    </>
  );
}

export default Display;