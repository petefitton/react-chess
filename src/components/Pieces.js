// import './Pieces.css';
import withPiece from '../hocs/withPiece';
import Pawn from './Pawn';
import Bishop from './Bishop';
import Knight from './Knight';
import Rook from './Rook';
import Queen from './Queen';
import King from './King';

function Pieces() {
  const pieces = [];

  const PawnWithPiece = withPiece(Pawn);
  pieces.push(<PawnWithPiece key={1} />);
  pieces.push(<PawnWithPiece key={2} />);
  pieces.push(<PawnWithPiece key={3} />);
  pieces.push(<PawnWithPiece key={4} />);
  pieces.push(<PawnWithPiece key={5} />);
  pieces.push(<PawnWithPiece key={6} />);
  pieces.push(<PawnWithPiece key={7} />);
  pieces.push(<PawnWithPiece key={8} />);

  const BishopWithPiece = withPiece(Bishop);
  pieces.push(<BishopWithPiece key={9} />);
  pieces.push(<BishopWithPiece key={10} />);

  const KnightWithPiece = withPiece(Knight);
  pieces.push(<KnightWithPiece key={11} />);
  pieces.push(<KnightWithPiece key={12} />);

  const RookWithPiece = withPiece(Rook);
  pieces.push(<RookWithPiece key={13} />);
  pieces.push(<RookWithPiece key={14} />);

  const QueenWithPiece = withPiece(Queen);
  pieces.push(<QueenWithPiece key={15} />);

  const KingWithPiece = withPiece(King);
  pieces.push(<KingWithPiece key={16} />);


  pieces.push(<PawnWithPiece key={17} />);
  pieces.push(<PawnWithPiece key={18} />);
  pieces.push(<PawnWithPiece key={19} />);
  pieces.push(<PawnWithPiece key={20} />);
  pieces.push(<PawnWithPiece key={21} />);
  pieces.push(<PawnWithPiece key={22} />);
  pieces.push(<PawnWithPiece key={23} />);
  pieces.push(<PawnWithPiece key={24} />);

  pieces.push(<BishopWithPiece key={25} />);
  pieces.push(<BishopWithPiece key={26} />);

  pieces.push(<KnightWithPiece key={27} />);
  pieces.push(<KnightWithPiece key={28} />);

  pieces.push(<RookWithPiece key={29} />);
  pieces.push(<RookWithPiece key={30} />);

  pieces.push(<QueenWithPiece key={31} />);

  pieces.push(<KingWithPiece key={32} />);

  return (
    <>
      {pieces}
    </>
  );
}

export default Pieces;