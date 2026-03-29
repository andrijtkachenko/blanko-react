import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const StyledHerro = styled.section`
  background-color: #ff7143;
  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 72px;
    text-align: center;
  }
  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    width: 587px;
    text-align: center;
    margin-top: 27px;
  }
  & .buttons {
    display: flex;
    justify-content: center;
    margin-top: 22px;
    gap: 8px;
  }

  & .wallpapers {
    width: 417px;
    height: 732px;
    background-image: url("./IMAGE.png");
    background-size: 417px 860px;
    background-position: bottom;
    flex-shrink: 0;
  }
`;
const Button = styled.button`
  width: 208px;
  height: 64px;
  border: none;
  border-radius: 6px;
  font-family: "Roboto";
  font-style: normal;
  font-size: 18px;
  font-weight: 700;
  background-color: ${({ bColor }) => bColor};
  color: ${({ fColor }) => fColor};
`;

export const Herro = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    window.addEventListener("resize", () => {
      setWidth(document.documentElement.clientWidth);
    });
  }, []);

  console.log(width);

  return (
    <StyledHerro>
      <div className="container">
        <div>
          <h1>Blanko template</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris
            porttitor amet volutpat.
          </p>{" "}
          <div className="buttons">
            <Button bColor="#000000" fColor="#ffffff">
              Purchase template
            </Button>
            <Button bColor="#ffffff" fColor="#000000">
              Other templates
            </Button>
          </div>
        </div>

        {width > 1024 && <div className="wallpapers"></div>}
      </div>
    </StyledHerro>
  );
};
