import React from 'react';

import '../styles/FullScreenContainer.scss';

const FullScreenContainer = props => {
  return (
    <div style={props.style} className={`full-screen-div ${props.className || ""}`}>
      {props.children}
    </div>
  );
}

export default FullScreenContainer;