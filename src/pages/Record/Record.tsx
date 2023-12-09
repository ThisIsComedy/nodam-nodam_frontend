import { useEffect, useState } from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";
import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";
import RateBox from "../../components/RateBox/RateBox";
import GrassChart from "../../components/GrassChart/GrassChart";
import TopSmokingReasonBox from "../../components/TopSmokingReasonBox/TopSmokingReasonBox";
import { getStats } from "../../apis";
import { GrassType, SmokeType, StatsType, statsTypeDefault, smokeTypeDefault, grassTypeDefault } from "./type";

const Record = () => {

	const [stats, setStats] = useState<StatsType>(statsTypeDefault);
	const [grass, setGrass] = useState<GrassType>(grassTypeDefault);
	const [smoke, setSmoke] = useState<SmokeType>(smokeTypeDefault);

	useEffect(() => {
		const onRender = async () => {
			const response = await getStats();
			if(!response) return;
			setStats(response.response);
			setGrass(response.grass);
			setSmoke(response.smokeCause);
		};
		onRender();
	}, []);

	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Title>기록</Title>
					</Header>
					<BoxContainer>
						<RateBox title="총 금연일" rate={stats?.noSmokeDay ?? 0} type="일" />
						<RateBox title="아낀 금액" rate={stats?.saveMoney ?? 0} type="원" />
						<RateBox title="연속 금연일" rate={stats?.continuityNoSmoke ?? 0} type="일" />
						<RateBox title="최장 연속 금연일" rate={stats?.maximumContinuityNoSmoke ?? 0} type="일" />
						<RateBox title="3일 연속 금연 횟수" rate={stats?.threeDayContinuityNoSmoke ?? 0} type="회" />
						<RateBox title="흡연 횟수" rate={stats?.smokeCount ?? 0} type="회" />
						<GrassChart grass={grass} />
						<TopSmokingReasonBox smoke={smoke} />
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
`;

const Title = styled.p`
	${font.H3};
	color: ${color.black};
`;