import styled from 'styled-components';

export const Container = styled.div`
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  padding-top: 50px;
  background: ${({ theme, type }) => type || theme.colors.white};
  .progress-status {
    &:before {
      background: ${({ theme, type }) => type || theme.colors.normal};
    }
  }
  .top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .info {
      .id {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.shadow};
      }
      h1 {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  h2 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme, type }) => type || theme.colors.black};
    margin-bottom: 20px;
  }
  .bottom {
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 25px 25px 0 0;
    padding: 30px 10px;
    .item-single {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .title,
      .ability {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: ${({ theme }) => theme.colors.black};
        width: 110px;
      }
      .number {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.normal};
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
