// import './withPiece.css';

function withPiece(WrappedComponent) {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  const EnhancedComponent = (props) => {
    return (
      <WrappedComponent {...props} />
    );
  }

  EnhancedComponent.displayName = `WithPiece(${getDisplayName(WrappedComponent)})`;

  return EnhancedComponent;
}

export default withPiece;