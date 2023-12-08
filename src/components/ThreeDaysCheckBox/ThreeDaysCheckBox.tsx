import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";
import CheckButton from "./CheckButton";

const ThreeDaysCheckBox = ({ state }: { state: number }) => {
	return (
		<Container>
			<Title>3일 연속 금연하기</Title>
			<CheckButtonBox>
				<CheckButton num={1} isChecked={state >= 1 && state <= 3} />
				<CheckButton num={2} isChecked={state >= 2 && state <= 3} />
				<CheckButton num={3} isChecked={state === 3} />
			</CheckButtonBox>
		</Container>
	);
};

export default ThreeDaysCheckBox;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 140px;
	width: 100%;
	background-color: ${color.white};
	border-radius: 16px;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
`;

const Title = styled.p`
	${font.H5}
	color: ${color.black}
`;

const CheckButtonBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
`;
