import styled from 'styled-components';

export const Container = styled.div`
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  padding-top: 50px;
  background: #ffffff;
  &.grass {
    background: #8bbe8a;
    h2 {
      color: #8bbe8a;
    }
    .progress-status {
      &:before {
        background: #8bbe8a;
      }
    }
  }
  &.fire {
    background: #ffa756;
    h2 {
      color: #ffa756;
    }
    .progress-status {
      &:before {
        background: #ffa756;
      }
    }
  }
  &.water {
    background: #58abf6;
    h2 {
      color: #58abf6;
    }
    .progress-status {
      &:before {
        background: #58abf6;
      }
    }
  }
  &.bug {
    background: #8bd674;
    h2 {
      color: #8bd674;
    }
    .progress-status {
      &:before {
        background: #8bd674;
      }
    }
  }
  &.normal {
    background: #b5b9c4;
    h2 {
      color: #b5b9c4;
    }
    .progress-status {
      &:before {
        background: #b5b9c4;
      }
    }
  }
  &.poison {
    background: #9f6e97;
    h2 {
      color: #9f6e97;
    }
    .progress-status {
      &:before {
        background: #9f6e97;
      }
    }
  }
  &.electric {
    background: #f2cb55;
    h2 {
      color: #f2cb55;
    }
    .progress-status {
      &:before {
        background: #f2cb55;
      }
    }
  }
  &.ground {
    background: #f78551;
    h2 {
      color: #f78551;
    }
    .progress-status {
      &:before {
        background: #f78551;
      }
    }
  }
  &.fairy {
    background: #eba8c3;
    h2 {
      color: #eba8c3;
    }
    .progress-status {
      &:before {
        background: #eba8c3;
      }
    }
  }
  &.fighting {
    background: #eb4971;
    h2 {
      color: #eb4971;
    }
    .progress-status {
      &:before {
        background: #eb4971;
      }
    }
  }
  &.flying {
    background: #748fc9;
    h2 {
      color: #748fc9;
    }
    .progress-status {
      &:before {
        background: #748fc9;
      }
    }
  }
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .info {
      .id {
        font-family: 'SF Pro Display', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        color: rgba(23, 23, 27, 0.6);
      }
      h1 {
        font-family: 'SF Pro Display', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        color: #ffffff;
      }
    }
  }
  h2 {
    font-family: 'SF Pro Display', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 20px;
  }
  .bottom {
    display: block;
    width: 100%;
    background-color: #ffffff;
    border-radius: 25px 25px 0 0;
    padding: 30px 10px;
    .item-single {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .title,
      .ability {
        font-family: 'SF Pro Display', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #17171b;
        width: 110px;
      }
      .number {
        font-family: 'SF Pro Display', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #747476;
      }
    }
  }
`;

export const Progress = styled.div`
  margin-left: 20px;
  width: 120px;
  height: 4px;
  border-radius: 100px;
  position: relative;
  &:before {
    content: '';
    width: ${(props) => (props.progress ? `${props.progress}%` : 0)};
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    border-radius: 100px;
  }
`;
