// import './CreatePiece.css';
import { useState } from 'react';
import withPiece from '../hocs/withPiece';
import Pawn from '../components/Pawn';
import Bishop from '../components/Bishop';
import Knight from '../components/Knight';
import Rook from '../components/Rook';
import Queen from '../components/Queen';
import King from '../components/King';

function CreatePiece({ pieceType }) {
  let [pieceColor, setPieceColor] = useState("");

  if (/^[PNBRQK]+$/.test(pieceType)) {
    setPieceColor("w");
  } else {
    setPieceColor("b");
  }
  
  if (/^[Pp]+$/.test(pieceType)) {
    // define props that Pawn should receive
    return withPiece(Pawn)();
  }
  if (/^[Nn]+$/.test(pieceType)) {
    // define props that Knight should receive
    return withPiece(Knight)();
  }
  if (/^[Bb]+$/.test(pieceType)) {
    // define props that Bishop should receive
    return withPiece(Bishop)();
  }
  if (/^[Rr]+$/.test(pieceType)) {
    // define props that Rook should receive
    return withPiece(Rook)();
  }
  if (/^[Qq]+$/.test(pieceType)) {
    // define props that Queen should receive
    return withPiece(Queen)();
  }
  if (/^[Kk]+$/.test(pieceType)) {
    // define props that King should receive
    return withPiece(King)();
  }
}

export default CreatePiece;