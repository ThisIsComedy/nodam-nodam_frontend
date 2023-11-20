import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const CheckButton = (props: { num: number; isChecked: boolean }) => {
	return (
		<>
			{props.isChecked ? (
				<ActiveContainer>
					<CheckIcon src='/assets/home/check.png' />
				</ActiveContainer>
			) : (
				<DefaultContainer>{props.num}</DefaultContainer>
			)}
		</>
	);
};

export default CheckButton;

const ActiveContainer = styled.div`
	display: flex;
	width: 48px;
	height: 48px;
	border-radius: 24px;
	justify-content: center;
	align-items: center;
	background-color: ${color.nodamGreen};
`;

const DefaultContainer = styled.div`
	display: flex;
	width: 48px;
	height: 48px;
	border: 1px solid ${color.gray300};
	border-radius: 24px;
	justify-content: center;
	align-items: center;
	${font.H4}
	color: ${color.gray500};
`;

const CheckIcon = styled.img`
	width: 36px;
	height: 36px;
`;