// import './Bishop.css';
import { useState } from 'react';

function Bishop({ pieceColor }) {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  return (
    <>
      {pieceColor === "w" ?
        <img src={`${PUBLIC_URL}/img/wbishop.png`} alt='white bishop' style={{ pointerEvents: 'none' }}></img>
        :
        <img src={`${PUBLIC_URL}/img/bbishop.png`} alt='black bishop' style={{ pointerEvents: 'none' }}></img>
      }
    </>
  );
}

export default Bishop;