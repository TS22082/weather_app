import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const GlassBox = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 30vw;
  min-width: 300px;
  text-align: center;

  animation: ${fadeIn} 0.5s ease-in 1;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const GlassText = styled.h1`
  margin: 0;
  color: white;
  text-shadow: 0px 1px 10px black;
  font-size: 1.25em;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Glass = (props) => {
  return (
    <GlassBox>
      <GlassText>{props.children}</GlassText>
    </GlassBox>
  );
};

export default Glass;
