import styled from "@emotion/styled";

const StyledHeader = styled.header`
  background-color: black;
  & .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 81px;
  }
  & .left {
    display: flex;
    align-items: center;
    gap: 65px;
    & a {
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;
    }
  }
  & .right {
    display: flex;
    align-items: center;
    gap: 20px;
    & a {
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
      font-size: 16px;
    }
  }
  & button {
    background: #ff7143;
    width: 207px;
    height: 48px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    border: none;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="left">
          <img src="./logo.svg" alt="logo" />
          <a href="/">mail@blanko.com</a>
        </div>
        <div className="right">
          <a href="/">landing</a>
          <a href="/">All pages</a>
          <a href="/">Template</a>
          <button>Purchase template</button>
        </div>
      </div>
    </StyledHeader>
  );
};
