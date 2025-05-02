// import './withPiece.css';

import { useState } from "react";

function withPiece(WrappedComponent) {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  const EnhancedComponent = (props, { pieceColor }) => {
    let [whosePiece] = useState(pieceColor);
    return (
      <WrappedComponent whosePiece={whosePiece} {...props} />
    );
  }

  EnhancedComponent.displayName = `WithPiece(${getDisplayName(WrappedComponent)})`;

  return EnhancedComponent;
}

export default withPiece;