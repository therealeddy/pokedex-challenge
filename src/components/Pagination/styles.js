import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  list-style-type: none;
  li {
    &.page-item {
      margin-right: 15px;
      button {
        font-family: 'SF Pro Display', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #252525;
        background-color: transparent;
        border: 0px solid;
        outline: none;
        padding: 10px;
        transition: all 0.4s ease-in-out;
        &:hover {
          box-shadow: inset 0 -5px 0 0 #80bdff;
        }
      }
      &.active {
        button {
          box-shadow: inset 0 -5px 0 0 #80bdff;
        }
      }
    }
    &.btn-paged {
      button {
        width: fit-content;
        height: fit-content;
        border: 0px solid;
        transition: all 0.4s ease-in-out;
        background-color: transparent;
      }
      &.disabled {
        button {
          opacity: 0.5;
        }
      }
      &.left {
        margin-right: 35px;
      }
      &.right {
        margin-left: 20px;
      }
    }
  }
`;
