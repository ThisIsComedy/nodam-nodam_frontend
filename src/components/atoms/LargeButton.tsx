import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const LargeButton = (props: { text: string }) => {
    return (
        <>
            <StartButton>{props.text}</StartButton>
        </>
    );
};

export default LargeButton;

const StartButton = styled.button`
  width: 358px;
  height: 64px;
  ${font.H4}
  color: ${color.white};
  background-color: ${color.gray900};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  
  &:hover {
    background-color: ${color.gray800};
  }
`;