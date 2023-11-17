import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	const knowHowList = [
		{
			title: "금단증상이 심해진다면?",
			desc: "이 방법을 따라해보세요!",
		},
	];

	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Logo src='/assets/home/nodamnodamlogo_gray.png' />
					</Header>
					<BoxContainer>
						<KnowHowBox>
							<KnowHowBoxTitle>{knowHowList[0].title}</KnowHowBoxTitle>
							<KnowHowBoxDesc>{knowHowList[0].desc}</KnowHowBoxDesc>
						</KnowHowBox>
					</BoxContainer>
				</Section>
				<Footer isGNB={true} page={1} />
			</Screen>
		</Layout>
	);
};

export default Home;

const Section = styled.div`
	width: 100%;
	height: 100%;
`;

const Header = styled.div`
	display: flex;
	width: 100%;
	height: 48px;
	padding: 0 16px;
	align-items: center;
	margin-bottom: 12px;
`;

const Logo = styled.img`
	height: 28px;
`;

const BoxContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 12px;
	padding: 0 16px;
`;

const KnowHowBox = styled.div`
	display: flex;
	width: 100%;
	background-color: ${color.white};
	border-radius: 16px;
	gap: 4px;
	flex-direction: column;
	padding: 10px 16px;
`;

const KnowHowBoxTitle = styled.p`
	${font.p3}
	color: ${color.gray700};
`;

const KnowHowBoxDesc = styled.p`
	${font.body2}
	color: ${color.black};
`;
