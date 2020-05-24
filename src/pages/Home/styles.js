import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { PokeballBG, PokeballBGCard } from '~/images';

export const Container = styled.div`
  background-image: url(${PokeballBG});
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  padding-top: 80px;
  h1 {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: #17171b;
  }
  p {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #747476;
    margin-bottom: 50px;
  }
`;

export const Pokemon = styled(Link)`
  display: block;
  width: 100%;
  height: 115px;
  border-radius: 8px;
  background-color: #80bdff;
  margin-bottom: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${PokeballBGCard});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  text-decoration: none !important;
  transition: all 0.4s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
  .id {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(23, 23, 27, 0.6);
  }
  h2 {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
  img {
    display: block;
    width: 110px;
    margin-top: -60px;
  }
`;
