import styled from "styled-components";
import { Moon, Sun } from "@icon-park/react";

const Navigation = ({ mode, changeMode }) => {
  return (
    <Container mode={mode.toString()}>
      <h1 className="left">Where in the World?</h1>
      <div className="right">
        {mode ? (
          <div className="wrapper" onClick={() => changeMode(!mode)}>
            <span>
              <Moon
                className="icons"
                theme="outline"
                size="22"
                fill="hsl(200, 15%, 8%)"
              />
            </span>
            <p>Dark Mode</p>
          </div>
        ) : (
          <div className="wrapper" onClick={() => changeMode(!mode)}>
            <span>
              <Sun
                className="icons"
                theme="filled"
                size="22"
                fill="hsl(0 , 0% , 100%)"
              />
            </span>
            <p>Light Mode</p>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.nav`
  height: 60px;
  width: 100%;
  padding: 0 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 6px 12px -4px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme, mode }) =>
    mode === "true" ? theme.light.lightElement : theme.dark.darkElement};
  @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
    padding: 1rem 1rem;
  }
  .left {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme, mode }) =>
      mode === "true" ? theme.light.text : theme.dark.text};
    @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
      font-size: 1rem;
    }
  }

  .right {
    font-weight: 600;
    font-size: 1.2rem;
    color: ${({ theme, mode }) =>
      mode === "true" ? theme.light.text : theme.dark.text};

    @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
      font-size: 1rem;
    }

    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
        font-size: 4.2rem;
      }
    }
    .wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      user-select: none;
      cursor: pointer;
    }
  }
`;
export default Navigation;
