import styled from 'styled-components';

import { PokeballBG } from '~/images';

export const Container = styled.div`
  background-image: url(${PokeballBG});
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  padding-top: 80px;
`;
