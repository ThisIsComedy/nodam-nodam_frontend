import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import PodiumBox from './PodiumBox';

const Top3RankingGroup = (props: { name: string; rate: number; rank: number; }) => {
	return (
		<Container>
			<ProfileGroup>
				<ProfileImage src='/assets/global/nodamSampleImage.png'/>
				<Name>{props.name}</Name>
				<Rate>{props.rate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}회</Rate>
			</ProfileGroup>
			<PodiumBox rank={props.rank}/>
		</Container>
	);
};

export default Top3RankingGroup;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
	justify-content: flex-end;
	width: 114px;
`;

const ProfileGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	align-items: center;
`;

const ProfileImage = styled.img`
	height: 64px;
	width: 64px;
`;

const Name = styled.p`
	${font.H4};
	color: ${color.black};
`;

const Rate = styled.p`
	${font.p1};
	color: ${color.black};
`;