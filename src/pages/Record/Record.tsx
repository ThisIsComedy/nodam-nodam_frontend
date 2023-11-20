import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";
import RateBox from "../../components/RateBox/RateBox";
import GrassChart from "../../components/GrassChart/GrassChart";

const Record = () => {
	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Title>기록</Title>
					</Header>
					<BoxContainer>
						<RateBox title="총 금연일" rate={500} type="일" />
						<RateBox title="아낀 금액" rate={145600} type="원" />
						<RateBox title="연속 금연일" rate={72} type="일" />
						<RateBox title="최장 연속 금연일" rate={234} type="일" />
						<RateBox title="3일 연속 금연 횟수" rate={90} type="회" />
						<RateBox title="흡연 횟수" rate={3} type="회" />
						<GrassChart />
					</BoxContainer>
				</Section>
				<Footer isGNB={true} page={2} />
			</Screen>
		</Layout>
	);
};

export default Record;

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
	margin-bottom: 12px;
`;

const Title = styled.p`
	${font.H3};
	color: ${color.black};
`;