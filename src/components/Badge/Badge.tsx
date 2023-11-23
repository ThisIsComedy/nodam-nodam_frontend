import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const Badge = (props: { title: string; rate: number; type: number }) => {
	// none: 0, bronze: 1, silver: 2. gold: 3
	return (
		<Container>
			<BadgeImage src={`/assets/badge/badge_${props.type}.png`} />
			<TextGroup>
				<Title>{props.title}</Title>
				<RateChip>x{props.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</RateChip>
			</TextGroup>
		</Container>
	);
};

export default Badge;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	align-items: center;
	width: 173px;
`;

const BadgeImage = styled.img`
	width: 100px;
	height: 100px;
`;

const TextGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

const Title = styled.p`
	${font.body2};
	color: ${color.black};
`;

const RateChip = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0 8px;
	height: 20px;
	background-color: ${color.gray200};
	color: ${color.gray700};
	${font.p3};
	border-radius: 10px;
`;