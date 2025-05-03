// import './King.css';
import { useState } from 'react';

function King({ pieceColor }) {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
    return (
      <>
        {pieceColor === "w" ?
          <img src={`${PUBLIC_URL}/img/wking.png`} alt='white king'></img>
          :
          <img src={`${PUBLIC_URL}/img/bking.png`} alt='black king'></img>
        }
      </>
    );
}

export default King;