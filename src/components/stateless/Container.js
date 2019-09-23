import React from 'react';
import Container from 'react-bootstrap/Container';

const mainContainer = props => {
  return (
    <Container className={props.className || ''}>
      { props.children }
    </Container>
  );
}

export default mainContainer;