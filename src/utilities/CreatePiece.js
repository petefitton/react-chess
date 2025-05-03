// import './CreatePiece.css';
import { useEffect, useState } from 'react';
import withPiece from '../hocs/withPiece';
import Pawn from '../components/Pawn';
import Bishop from '../components/Bishop';
import Knight from '../components/Knight';
import Rook from '../components/Rook';
import Queen from '../components/Queen';
import King from '../components/King';

function CreatePiece({ pieceType }) {
  let [pieceColor, setPieceColor] = useState("");

  useEffect(() => {
    if (/^[PNBRQK]+$/.test(pieceType)) {
      setPieceColor("w");
    } else {
      setPieceColor("b");
    }
  }, [pieceType]);

  
  if (/^[Pp]+$/.test(pieceType)) {
    // define props that Pawn should receive
    let NewPawn = withPiece(Pawn);
    return <NewPawn pieceColor={pieceColor} />
  }
  if (/^[Nn]+$/.test(pieceType)) {
    // define props that Knight should receive
    let NewKnight = withPiece(Knight);
    return <NewKnight pieceColor={pieceColor} />
  }
  if (/^[Bb]+$/.test(pieceType)) {
    // define props that Bishop should receive
    let NewBishop = withPiece(Bishop);
    return <NewBishop pieceColor={pieceColor} />
  }
  if (/^[Rr]+$/.test(pieceType)) {
    // define props that Rook should receive
    let NewRook = withPiece(Rook);
    return <NewRook pieceColor={pieceColor} />
  }
  if (/^[Qq]+$/.test(pieceType)) {
    // define props that Queen should receive
    let NewQueen = withPiece(Queen);
    return <NewQueen pieceColor={pieceColor} />
  }
  if (/^[Kk]+$/.test(pieceType)) {
    // define props that King should receive
    let NewKing = withPiece(King);
    return <NewKing pieceColor={pieceColor} />
  }
}

export default CreatePiece;