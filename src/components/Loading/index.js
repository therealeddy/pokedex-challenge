import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useColors } from '~/hooks/theme';

import { Container } from './styles';

export default function Loading(props) {
  const colors = useColors();
  return (
    <Container {...props}>
      <AiOutlineLoading3Quarters size={60} color={colors.water} />
    </Container>
  );
}
