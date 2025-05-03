// import './Queen.css';
import { useState } from 'react';

function Queen({ pieceColor }) {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  return (
    <>
      {pieceColor === "w" ?
        <img src={`${PUBLIC_URL}/img/wqueen.png`} alt='white queen'></img>
        :
        <img src={`${PUBLIC_URL}/img/bqueen.png`} alt='black queen'></img>
      }
    </>
  );
}

export default Queen;