// import './Rook.css';
import { useState } from 'react';

function Rook({ pieceColor }) {
  const [PUBLIC_URL] = useState(process.env.PUBLIC_URL);
  return (
    <>
      {pieceColor === "w" ?
        <img src={`${PUBLIC_URL}/img/wrook.png`} alt='white rook'></img>
        :
        <img src={`${PUBLIC_URL}/img/brook.png`} alt='black rook'></img>
      }
    </>
  );
}

export default Rook;