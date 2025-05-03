// import './Pawn.css';
import { useState } from 'react';

function Pawn({ pieceColor }) {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  return (
    <>
      {pieceColor === "w" ?
        <img src={`${PUBLIC_URL}/img/wpawn.png`} alt='white pawn' style={{ pointerEvents: 'none' }}></img>
        :
        <img src={`${PUBLIC_URL}/img/bpawn.png`} alt='black pawn' style={{ pointerEvents: 'none' }}></img>
      }
    </>
  );
}

export default Pawn;