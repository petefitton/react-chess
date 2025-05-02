import './Tiles.css';
import Tile from './Tile';
import CreatePiece from '../utilities/CreatePiece';

function Tiles({ piecePlacement, handleTileClick }) {
  const tileLocations = [
    "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
    "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
    "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
    "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
    "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
    "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
    "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
    "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1",
  ];
  // ex piecePlacement for starting position: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR
  let layoutTiles = function() {
    const tiles = [];
    let i = 0;
    for (let char=0; char<piecePlacement.length; char++) {
      if (/^[1-8]+$/.test(piecePlacement[char])) {
        // there is some number of empty tiles
        for (let j=0; j<piecePlacement[char]; j++) {
          tiles.push(<Tile key={tileLocations[i]} id={tileLocations[i]} handleTileClick={handleTileClick} isWhite={Math.floor(i / 8) % 2 === 0 ? i % 2 === 0 : i % 2 !== 0} />);
          i++;
        }
      }
      else if (/^[PNBRQKpnbrqk]+$/.test(piecePlacement[char])) {
        // there is a piece
        tiles.push(<Tile children={<CreatePiece pieceType={char} key={i} />} key={tileLocations[i]} id={tileLocations[i]} handleTileClick={handleTileClick}  isWhite={Math.floor(i / 8) % 2 === 0 ? i % 2 === 0 : i % 2 !== 0} />);
        i++;
      }
    }
    return tiles;
  };

  return (
    <div className="tiles-container">
      {layoutTiles()}
    </div>
  );
}

export default Tiles;