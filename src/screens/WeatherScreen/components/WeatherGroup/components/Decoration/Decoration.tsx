import React from 'react';
import SvgCircle from './components/SvgCircle';
import {Container} from './styled';
const Decoration = () => {
  return (
    <Container>
      <SvgCircle color="#fff" size={100} left={320} top={200} />
      <SvgCircle color="#fff" size={60} left={-30} top={70} />
    </Container>
  );
};

export default Decoration;
