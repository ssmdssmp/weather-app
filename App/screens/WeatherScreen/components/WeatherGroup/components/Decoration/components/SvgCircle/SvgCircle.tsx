import React from 'react';
import {Svg, Circle} from 'react-native-svg';
import {TSvgCircle} from './types';
import {Container} from './styled';
const SvgCircle = ({top, left, size, color}: TSvgCircle) => {
  return (
    <Container left={left} top={top}>
      <Svg width={300} height={300}>
        <Circle cx={size} cy={size} r={size} opacity={0.1} fill={color} />
      </Svg>
    </Container>
  );
};

export default SvgCircle;
