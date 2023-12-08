import React, { useEffect, useState } from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";
import KnowHowBox from "../../components/KnowHowBox/KnowHowBox";
import ThreeDaysCheckBox from "../../components/ThreeDaysCheckBox/ThreeDaysCheckBox";
import GrassChart from "../../components/GrassChart/GrassChart";
import RateBox from "../../components/RateBox/RateBox";
import { getGrassChart, getSimpleStats } from "../../apis";
import { GrassType, grassTypeDefault } from "../Record/type";
import { SimpleStatsType, simpleStatsTypeDefault } from "./type";

const Home = () => {
	const [stats, setStats] = useState<SimpleStatsType>(simpleStatsTypeDefault);
	const [grass, setGrass] = useState<GrassType>(grassTypeDefault);

	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		const refreshToken = localStorage.getItem("refreshToken");

		const getStats = async () => {
			const {
				threeDayCurrentState,
				threeDayContinuityNoSmoke,
				saveMoney
			} = await getSimpleStats();
			setStats({
				threeDayCurrentState,
				threeDayContinuityNoSmoke,
				saveMoney
			});

			const data = await getGrassChart();
			setGrass(data);
		};

		localStorage.removeItem("email");
		localStorage.removeItem("isRegister");

		if (!(accessToken && refreshToken)) {
			alert("로그아웃 되었습니다");
			window.location.href = "/";
		}

		getStats();
	}, []);

	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Logo src='/assets/home/nodamnodamlogo_gray.png' />
					</Header>
					<BoxContainer>
						<KnowHowBox />
						<ThreeDaysCheckBox state={stats.threeDayCurrentState} />
						<GrassChart grass={grass}/>
						<RateBox title="3일 연속 금연 횟수" rate={stats.threeDayContinuityNoSmoke} type="회" />
						<RateBox title="아낀 금액" rate={stats.saveMoney} type="원" />
					</BoxContainer>
					<RetryButton>금연 재도전하기</RetryButton>
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
`;

const Logo = styled.img`
	height: 28px;
`;

const RetryButton = styled.button`
	display: flex;
	width: 160px;
	height: 56px;
	align-items: center;
	justify-content: center;
	background-color: ${color.gray900};
	color: ${color.white};
	${font.H5};
	border-radius: 16px;
	margin-top: 57px;
`;