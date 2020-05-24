import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container } from './styles';

export default function Loading(props) {
  return (
    <Container {...props}>
      <AiOutlineLoading3Quarters size={60} color="#0069D9" />
    </Container>
  );
}
