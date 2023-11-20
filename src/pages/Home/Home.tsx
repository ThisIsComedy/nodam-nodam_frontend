import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import Footer from "../../components/Footer/Footer";
import KnowHowBox from "../../components/KnowHowBox/KnowHowBox";
import ThreeDaysCheckBox from "../../components/ThreeDaysCheckBox/ThreeDaysCheckBox";
import GrassChart from "../../components/GrassChart/GrassChart";

const Home = () => {
	const smokingDate = [
		{
			"at": "2023-11-14"
		},
		{
			"at": "2023-11-15"
		}
	]

	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Logo src='/assets/home/nodamnodamlogo_gray.png' />
					</Header>
					<BoxContainer>
						<KnowHowBox />
						<ThreeDaysCheckBox />
						<GrassChart smokingDate={smokingDate} />
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
