import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20%;
`;

const Loading = () => (
  <Container>
    <span role="img" aria-label="Loading">
    ⏰ wait a few seconds... ⏰
    </span>
  </Container>
);

export default Loading;
