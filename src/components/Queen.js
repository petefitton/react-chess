// import './Queen.css';
import { useState } from 'react';

function Queen({ pieceColor }) {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  return (
    <>
      {pieceColor === "w" ?
        <img src={`${PUBLIC_URL}/img/wqueen.png`} alt='white queen' style={{ pointerEvents: 'none' }}></img>
        :
        <img src={`${PUBLIC_URL}/img/bqueen.png`} alt='black queen' style={{ pointerEvents: 'none' }}></img>
      }
    </>
  );
}

export default Queen;