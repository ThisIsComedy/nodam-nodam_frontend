import React, { useEffect, useState } from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";
import Top3RankingGroup from "../../components/RankingGroup/Top3RankingGroup";
import DefaultRankingGroup from "../../components/RankingGroup/DefaultRankingGroup";
import { getRanking } from "../../apis";
import { RankType, rankTypeDefault } from "./type";

const Ranking = () => {

	const [rank, setRank] = useState<RankType[]>(rankTypeDefault);

	useEffect(() => {
		const getRank = async () => {
			const res = await getRanking();
			setRank(res.map(({ userName, profileImage, threeDayContinuityNoSmoke }: RankType) => ({
				userName,
				profileImage,
				threeDayContinuityNoSmoke
			})));
		};

		getRank();
	}, []);

	return (
		<Layout>
			<Screen bgcolor={color.white}>
				<Section>
					<Header onClick={() => console.log(rank)}>
						<Title>랭킹</Title>
						<Information>3일 연속 금연일 기준</Information>
					</Header>
					<BoxContainer>
						<Top3RankingContainer>
							{rank.slice(0, 3).map((obj, idx) => {
								const top3Order: number[] = [2, 1, 3];

								return (
									<Top3RankingGroup
										name={obj.userName}
										rate={obj.threeDayContinuityNoSmoke}
										rank={top3Order[idx]}
									/>
								);
							})}
						</Top3RankingContainer>
						<DefaultRankingContainer>
							{rank.slice(3).map((obj, idx) => (
								<DefaultRankingGroup
									name={obj.userName}
									rate={obj.threeDayContinuityNoSmoke}
									rank={idx + 4}
								/>
							))}
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