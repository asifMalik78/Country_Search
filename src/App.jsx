import styled from "styled-components";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useState } from "react";
import { ModeComment } from "styled-icons/material-rounded";

function App() {
  const [mode, setMode] = useState(true);

  const changeMode = (val) => {
    setMode(val);
  };
  return (
    <Container mode={mode.toString()}>
      <Navigation mode={mode} changeMode={changeMode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/detail" element={<Detail mode={mode} />} />
      </Routes>
    </Container>
  );
}

const Container = styled.nav`
  max-width: 1540px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme, mode }) =>
    mode==="true" ? theme.light.bg : theme.dark.bg};
`;

export default App;
