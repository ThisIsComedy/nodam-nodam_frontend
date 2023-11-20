import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const RateBox = (props: { title: string; rate: number, type: string }) => {
	return (
		<Container>
			<Title>{props.title}</Title>
			<RateGroup>
				<Rate>{props.rate}</Rate>
				<Type>{props.type}</Type>
			</RateGroup>
		</Container>
	);
};

export default RateBox;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 173px;
	height: 85px;
	padding: 16px 16px 12px 16px;
	border-radius: 16px;
	background-color: ${color.white};
`;

const Title = styled.p`
	${font.body2};
	color: ${color.gray600};
`;

const RateGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1px;
`;

const Rate = styled.p`
	${font.H4};
	color: ${color.black};
`;

const Type = styled.p`
	${font.body2};
	color: ${color.black};
	margin-top: 5px;
`;