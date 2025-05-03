// import './Knight.css';
import { useState } from 'react';

function Knight({ pieceColor }) {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  return (
    <>
      {pieceColor === "w" ?
        <img src={`${PUBLIC_URL}/img/wknight.png`} alt='white knight' style={{ pointerEvents: 'none' }}></img>
        :
        <img src={`${PUBLIC_URL}/img/bknight.png`} alt='black knight' style={{ pointerEvents: 'none' }}></img>
      }
    </>
  );
}

export default Knight;