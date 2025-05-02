// import './Game.css';
import { useState } from 'react';
import Display from './Display';

function Game() {
  let [isActive, setIsActive] = useState(true);
  let [whoseTurn, setWhoseTurn] = useState("w");
  let [piecePlacement, setPiecePlacement] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  let [castlingPossible, setCastlingPossible] = useState("KQkq");
  let [enPassant, setEnPassant] = useState("-");
  let [halfmove, setHalfmove] = useState(0);
  let [fullmove, setFullmove] = useState(1);
  let [sourceTile, setSourceTile] = useState("");
  let [targetTile, setTargetTile] = useState("");
  let [gameEnding, setGameEnding] = useState(""); // "w" for white wins, "b" for black wins, "s" for stalemate/draw

  function areMovesPossible() {
    // does player whose turn it is have any possible moves? true or false
    // calls determineGameEnding() if no moves possible for current player
  }

  function determineGameEnding() {
    // should run if no moves are possible (if areMovesPossible returns false)
    // setIsActive(false)
    // call setGameEnding()
  }

  function handleTileClick(tileLocation) {
    // console.log(tileLocation);
    // if clicked tile holds a piece belonging to player whose turn it is, then setSourceTile
    // otherwise, setTargetTile
    // if targetTile is set, call isMoveLegal()
    // if move is legal, should call handleMove() 
  }

  function isMoveLegal() {
    // returns true or false
    // determine if the move/capture is legal:
    // 1. that piece on sourceTile can move to targetTile or capture targetTile piece
    // 2. that the move/capture does not lead current player to be in check
  }

  function handleMove() {
    // call setWhoseTurn() 
    // call setPiecePlacement() 
    // call setCastlingPossible() 
    // call setEnPassant() 
    // call setHalfmove() 
    // call setFullmove() 
    // call setSourceTile() 
    // call setTargetTile() 
    // call areMovesPossible() which in turn calls isCheckMate()
  }

  return (
    <>
      <Display piecePlacement={piecePlacement} handleTileClick={handleTileClick} />
    </>
  );
}

export default Game;