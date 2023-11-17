import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const GNBButton = (props: {
	index: number;
	text: string;
	icon: Array<string>;
	isActive: boolean;
}) => {
	const labelStyle = {
		color: props.isActive ? color.black : color.gray500,
	};

	return (
		<Container>
			<Icon src={props.isActive ? props.icon[0] : props.icon[1]} />
			<Label style={labelStyle}>{props.text}</Label>
		</Container>
	);
};

export default GNBButton;

const Container = styled.div`
	width: 79px;
	height: 56px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4px;
	/* background-color: red; */
	cursor: pointer;
`;

const Label = styled.p`
	${font.p2}
`;

const Icon = styled.img`
	width: 36px;
	height: 36px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
