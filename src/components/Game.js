// import './Game.css';
import { useEffect, useState } from 'react';
import Display from './Display';
// import CreatePiece from '../utilities/CreatePiece';
import canMove from '../utilities/canMove';
import canCapture from '../utilities/canCapture';

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
  let [checkIfLegalMove, setCheckIfLegalMove] = useState(false); // "w" for white wins, "b" for black wins, "s" for stalemate/draw
  let [gameEnding, setGameEnding] = useState(""); // "w" for white wins, "b" for black wins, "s" for stalemate/draw

  function whatIsAtTileLocation(tileLocation) {
    // returns a single character from these character options: "PNBRQKpnbrqk-" ("-" means empty)
    let rank = 8 - tileLocation[1]; // ex: for "e4" -> "4"
    // ex: 2; so I need 6 which means 8-2 = 6
    let fileNumFromLetters = {"a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7};
    let file = fileNumFromLetters[tileLocation[0]]; // ex: for "e4" -> "e"
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
        setSourceTile(tileLocation);
      } else if (sourceTile !== "" && sourceTile !== tileLocation) {
        setTargetTile(tileLocation);
        setCheckIfLegalMove(true);
      }
    } else if (/^[pnbrqk]+$/.test(clickedTile)) {
      // selected piece is black
      if (whoseTurn === "b") {
        setSourceTile(tileLocation);
      } else if (sourceTile !== "" && sourceTile !== tileLocation) {
        setTargetTile(targetTile => tileLocation);
        setCheckIfLegalMove(true);
      }
    } else {
      // selected tile is empty
      if (sourceTile !== "" && sourceTile !== tileLocation) {
        setTargetTile(targetTile => tileLocation);
        setCheckIfLegalMove(true);
      }
    }
  }

  useEffect(function checkIfMoveIsLegal() {
    if (checkIfLegalMove) {
      if (isMoveLegal()) {
        handleMove();
      } else {
        setTargetTile("");
        setCheckIfLegalMove(false);
      }
    }
  }, [checkIfLegalMove]);

  function isMoveLegal() {
    // returns true or false
    // determine if the move/capture is legal:
    // 1. that piece on sourceTile can move to targetTile or capture targetTile piece
    // 2. that the move/capture does not lead current player to be in check
    let movingPieceType = whatIsAtTileLocation(sourceTile);
    let targetTilePiece = whatIsAtTileLocation(targetTile);
    if (targetTilePiece === "-") {
      return canMove(movingPieceType, sourceTile, targetTile);
    } else {
      return canCapture(movingPieceType, sourceTile, targetTile)
    }
  }

  function handleMove() {
    // setWhoseTurn();
    // setPiecePlacement();
    // setCastlingPossible();
    // setEnPassant();
    // setHalfmove();
    // setFullmove();
    // setSourceTile();
    // setTargetTile();
    // areMovesPossible();
  }

  function areMovesPossible() {
    // does player whose turn it is have any possible moves? true or false
    // calls determineGameEnding() if no moves possible for current player
  }

  function determineGameEnding() {
    // should run if no moves are possible (if areMovesPossible returns false)
    // setIsActive(false)
    // call setGameEnding()
  }

  return (
    <>
      <Display piecePlacement={piecePlacement} handleTileClick={handleTileClick} />
    </>
  );
}

export default Game;