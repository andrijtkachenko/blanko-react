import { LandingCard } from "./LandingCard";
import styled from "@emotion/styled";

const StyledSection = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 25px;
  }
  & h2 {
    width: 274px;
    height: 48px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    @media screen and (min-width: 1024px) {
      font-size: 40px;
    }
  }
`;

export const Landing = () => {
  return (
    <StyledSection>
      <div className="container">
        <h2>Landing pages</h2>
        <ul>
          <LandingCard image="Lan1.png" text="Landing one" />
          <LandingCard image="Lan2.png" text="Landing two" />
          <LandingCard image="Lan3.png" text="Landing three" />
          <LandingCard image="Lan4.png" text="Landing four" />
        </ul>
      </div>
    </StyledSection>
  );
};
