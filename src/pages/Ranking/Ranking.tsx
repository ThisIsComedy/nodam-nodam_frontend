import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";
import Top3RankingGroup from "../../components/RankingGroup/Top3RankingGroup";
import DefaultRankingGroup from "../../components/RankingGroup/DefaultRankingGroup";

const Ranking = () => {
	return (
		<Layout>
			<Screen bgcolor={color.white}>
				<Section>
					<Header>
						<Title>랭킹</Title>
						<Information>3일 연속 금연일 기준</Information>
					</Header>
					<BoxContainer>
						<Top3RankingContainer>
							<Top3RankingGroup name="이상진"	rate={80} rank={2}/>
							<Top3RankingGroup name="신준서"	rate={120} rank={1}/>
							<Top3RankingGroup name="이창보"	rate={70} rank={3}/>
						</Top3RankingContainer>
						<DefaultRankingContainer>
							<DefaultRankingGroup name="마현우" rate={69} rank={4}/>
							<DefaultRankingGroup name="강민석" rate={68} rank={5}/>
							<DefaultRankingGroup name="강승훈" rate={67} rank={6}/>
							<DefaultRankingGroup name="권세원" rate={66} rank={8}/>
							<DefaultRankingGroup name="김석진" rate={65} rank={9}/>
							<DefaultRankingGroup name="김민석" rate={64} rank={10}/>
							<DefaultRankingGroup name="백진암" rate={63} rank={11}/>
							<DefaultRankingGroup name="변은혜" rate={62} rank={12}/>
							<DefaultRankingGroup name="심지혜" rate={61} rank={13}/>
							<DefaultRankingGroup name="원설아" rate={60} rank={14}/>
							<DefaultRankingGroup name="이하린" rate={59} rank={15}/>
							<DefaultRankingGroup name="한예준" rate={56} rank={16}/>
							<DefaultRankingGroup name="황현민" rate={34} rank={17}/>
						</DefaultRankingContainer>
					</BoxContainer>
				</Section>
				<Footer isGNB={true} page={3} />
			</Screen>
		</Layout>
	);
};

export default Ranking;

const Section = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	height: 48px;
	padding: 0 16px;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.p`
	${font.H3};
	color: ${color.black};
`;

const Information = styled.p`
	${font.p2};
	color: ${color.gray600};
`;

const Top3RankingContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
`;

const DefaultRankingContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 12px;
`;