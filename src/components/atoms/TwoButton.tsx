import React from 'react';
import LargeButton from "./LargeButton";
import styled from "styled-components";
import color from "../../styles/color";
import font from "../../styles/font";

interface TwoButtonProps {
    large: string;
    small: string;
    largeOnClick?: React.MouseEventHandler<HTMLDivElement>;
    smallOnClick?: React.MouseEventHandler<HTMLDivElement>;
}

const TwoButton = (props: TwoButtonProps) => {
    return (
        <>
            <Container>
                {!!props.smallOnClick
                    ? <div onClick={props.smallOnClick}>
                        <SmallButton>{props.small}</SmallButton>
                    </div>
                    : <SmallButton>{props.small}</SmallButton>}
                <LargeButton
                    text={props.large}
                    isLarge={false}
                    onClick={props.largeOnClick}
                />
            </Container>
        </>
    );
};

export default TwoButton;

const Container = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

const SmallButton = styled.button`
  width: 120px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 43px;
  color: ${color.black};
  background-color: ${color.white};
  border-radius: 16px;
  border: 1px solid ${color.gray300};
  ${font.H4};
  white-space: nowrap;
  
  &:hover {
    background-color: ${color.gray100};
  }
`;