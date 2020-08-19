import React, { forwardRef } from 'react';

import { Container, TInput } from './styles';

const Input = ({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style} >
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
