import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const DefaultRankingGroup = (props: { name: string; rate: number; rank: number; }) => {
	return (
		<Container>
			<ProfileGroup>
				<Rank>{props.rank}</Rank>
				<ProfileImage src='/assets/global/nodamSampleImage.png' />
				<Name>{props.name}</Name>
			</ProfileGroup>
			<Rate>{props.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}회</Rate>
		</Container>
	);
};

export default DefaultRankingGroup;

const Container = styled.div`
	width: 100%;
	height: 56px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0px 8px;
	align-items: center;
`;

const ProfileGroup = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	align-items: center;
`;

const Rank = styled.p`
	width: 20px;
	${font.p1};
	color: ${color.gray600};
`;

const ProfileImage = styled.img`
	width: 40px;
	height: 40px;
`;

const Name = styled.p`
	${font.body1};
	color: ${color.black};
`;

const Rate = styled.p`
	${font.p1};
	color: ${color.black};
`;