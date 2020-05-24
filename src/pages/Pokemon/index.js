import React from 'react';

import documentTitle from '~/utils/documentTitle';

import { Container } from './styles';

export default function Home() {
  documentTitle('Pokemon');

  return (
    <Container>
      <div className="container">
        <h1>Pokemon</h1>
      </div>
    </Container>
  );
}
