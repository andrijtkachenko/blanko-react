import styled from "@emotion/styled";

const StyledCard = styled.li`
  width: 414px;
  @media screen and (min-width: 1024px) {
    width: 414px;
  }

  & .black {
    width: 414px;
    height: 374px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 6px;
    @media screen and (min-width: 1024px) {
      width: 414px;
      height: 374px;
    }
  }
  & .thumb {
    width: 256px;
    @media screen and (min-width: 1024) {
      width: 334px;
    }
  }
  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    padding: 24px;
    padding-bottom: 25px;
    padding-left: 16px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 6px;
    @media screen and (min-width: 1024px) {
      margin-left: 32px;
    }
  }
`;
export const LandingCard = ({ image, text }) => {
  return (
    <StyledCard>
      <div className="black">
        <div className="thumb">
          <img src={image} alt="super nyper" />
        </div>
      </div>
      <p>{text}</p>
    </StyledCard>
  );
};
