function canCapture(pieceType, sourceTile, targetTile) {
  if (/^[P]+$/.test(pieceType)) {
    // piece is a white Pawn
    // determine if Pawn can capture from source location to target location
// TODO: write logic for if a white pawn can make the potential capture
    return true;
  }
  // if (/^[Nn]+$/.test(pieceType)) {
  //   // define props that Knight should receive
  //   let NewKnight = withPiece(Knight);
  //   return <NewKnight pieceColor={pieceColor} />
  // }
  // if (/^[Bb]+$/.test(pieceType)) {
  //   // define props that Bishop should receive
  //   let NewBishop = withPiece(Bishop);
  //   return <NewBishop pieceColor={pieceColor} />
  // }
  // if (/^[Rr]+$/.test(pieceType)) {
  //   // define props that Rook should receive
  //   let NewRook = withPiece(Rook);
  //   return <NewRook pieceColor={pieceColor} />
  // }
  // if (/^[Qq]+$/.test(pieceType)) {
  //   // define props that Queen should receive
  //   let NewQueen = withPiece(Queen);
  //   return <NewQueen pieceColor={pieceColor} />
  // }
  // if (/^[Kk]+$/.test(pieceType)) {
  //   // define props that King should receive
  //   let NewKing = withPiece(King);
  //   return <NewKing pieceColor={pieceColor} />
  // }
}

export default canCapture;