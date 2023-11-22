import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const LargeButton = (props: { text: string, isLarge: boolean, onClick?: React.MouseEventHandler<HTMLDivElement>}) => {
    return (
        <>
            {!!props.onClick
                ? <div onClick={props.onClick}>
                    <Button isLarge={props.isLarge}>{props.text}</Button>
                </div>
                : <Button isLarge={props.isLarge}>{props.text}</Button>}
        </>
    );
};

export default LargeButton;

const Button = styled.button<{ isLarge: boolean }>`
  width: ${v => v.isLarge ? "358px" : "226px"};
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