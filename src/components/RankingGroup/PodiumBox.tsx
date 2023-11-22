import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const PodiumBox = (props: { rank: number }) => {
	const containerStyle = {
		height: props.rank === 1 ? "110px" : props.rank === 2 ? "85px" : props.rank === 3 ? "60px" : "0px",
	};

	return (
		<Container style={containerStyle}>
			<Rank>{props.rank}</Rank>
		</Container>
	);
};

export default PodiumBox;

const Container = styled.div`
	width: 100%;
	background-color: ${color.gray100};
	display: flex;
	flex-direction: column;
	padding-bottom: 14px;
	align-items: center;
	justify-content: flex-end;
	border-radius: 16px;
`;

const Rank = styled.p`
	${font.H3};
	color: ${color.nodamGreen};
`;