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

  function whatIsAtTileLocation(tileLocation) {
    // returns a single character from these character options: "PNBRQKpnbrqk-" ("-" means empty)
    let rank = tileLocation[1]; // ex: for "e4" -> "4"
    let file = tileLocation[0]; // ex: for "e4" -> "e"
    let currentBoardRankFenNotation = piecePlacement.split("/")[rank];

    function breakOutRank(currentBoardRankFenNotation) {
      // break currentBoardRankFenNotation into 8 characters in one string
      let output = "";
      for (let i=0; i<currentBoardRankFenNotation.length; i++) {
        if (/^[1-8]+$/.test(currentBoardRankFenNotation[i])) {
          for (let j=0; j<currentBoardRankFenNotation[i]; j++) {
            output += "-";
          }
        }
        else if (/^[PNBRQKpnbrqk]+$/.test(currentBoardRankFenNotation[i])) {
          output += currentBoardRankFenNotation[i];
        }
      }
      return output;
    }

    let currentBoardRankBrokenOut = breakOutRank(currentBoardRankFenNotation);

    return currentBoardRankBrokenOut[file];
  }

  function handleTileClick(tileLocation) {
    // ex piecePlacement for starting position: rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR

    let clickedTile = whatIsAtTileLocation(tileLocation);
    if (/^[PNBRQK]+$/.test(clickedTile)) {
      // selected piece is white
      if (whoseTurn === "w") {
        setSourceTile(clickedTile);
      } else {
        setTargetTile(clickedTile);
        if (isMoveLegal()) {
          handleMove();
        };
      }
    } else {
      // selected piece is black
      if (whoseTurn === "b") {
        setSourceTile(clickedTile);
      } else {
        setTargetTile(clickedTile);
        if (isMoveLegal()) {
          handleMove();
        };
      }
    }
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