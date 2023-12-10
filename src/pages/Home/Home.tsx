import React, { useEffect, useRef, useState } from "react";
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
import TwoButton from "../../components/atoms/TwoButton";
import { checkSmoked, getGrassChart, getSimpleStats } from "../../apis";
import { GrassType, grassTypeDefault } from "../Record/type";
import { SimpleStatsType, simpleStatsTypeDefault } from "./type";

const Home = () => {
	const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
	const BottomSheetBackground = useRef<any>();
	const [stats, setStats] = useState<SimpleStatsType>(simpleStatsTypeDefault);
	const [grass, setGrass] = useState<GrassType>(grassTypeDefault);
	const [isSmoked, setIsSmoked] = useState<any>();

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

		const checkSmoke = async () => {
			const res = await checkSmoked();
			setIsSmoked(res);
		};

		localStorage.removeItem("email");
		localStorage.removeItem("isRegister");

		if (!(accessToken && refreshToken)) {
			alert("로그아웃 되었습니다");
			window.location.href = "/";
		}

		getStats();
		checkSmoke();
	}, []);



	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Logo src='/assets/home/nodamnodamlogo_gray.png' />
					</Header>
					<BoxContainer isGNB={!isBottomSheetOpen} >
						<KnowHowBox />
						<ThreeDaysCheckBox state={stats.threeDayCurrentState} />
						<GrassChart grass={grass}/>
						<RateBox title="3일 연속 금연 횟수" rate={stats.threeDayContinuityNoSmoke} type="회" />
						<RateBox title="아낀 금액" rate={stats.saveMoney} type="원" />
					</BoxContainer>
					<RetryButton onClick={() => setBottomSheetOpen(true)}>금연 재도전하기</RetryButton>
					{
						isBottomSheetOpen &&
						<BottomSheetContainer ref={BottomSheetBackground} onClick={e => {
							if (e.target === BottomSheetBackground.current) {
								setBottomSheetOpen(false);
							}
						}}>
							<BottomSheetContent>
								<BottomSheetHeader>
									<BottomSheetTitle>금연 재도전</BottomSheetTitle>
									<CloseIcon src="/assets/global/close.svg" onClick={() => setBottomSheetOpen(false)} />
								</BottomSheetHeader>
								<BottomSheetDesc>
									흡연하셨나요?<br />
									괜찮아요, 다시 도전하면 돼요.
								</BottomSheetDesc>
								<TwoButton
									large="재도전"
									small="닫기"
									largeOnClick={() => {
										if (isSmoked) {
											setBottomSheetOpen(false);
											alert("이미 금연 실패 버튼을 눌렀습니다.");
											return;
										}
										window.location.href = "/retry";
									}}
									smallOnClick={() => setBottomSheetOpen(false)} />
							</BottomSheetContent>
						</BottomSheetContainer>
					}
				</Section>
				<Footer isGNB={!isBottomSheetOpen} page={1} />
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
	position: relative;
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

const BottomSheetContainer = styled.div`
	display: flex;
	position: absolute;
	align-items: flex-end;
	width: 390px;
	height: 844px;
	top: -47px;
	border-radius: 49px;
	background-color: rgba(0,0,0,0.6);
`;

const BottomSheetContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 12px 0 58px;
	width: 100%;
	height: 320px;
	border-radius: 36px 36px 49px 49px;
	background-color: ${color.white}
`;

const BottomSheetHeader = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 48px;
	align-items: center;
	justify-content: center;
`;

const BottomSheetTitle = styled.p`
	${font.H5};
	color: ${color.black};
	text-align: center;
`;

const CloseIcon = styled.img`
	position: absolute;
	width: 24px;
	height: 24px;
	right: 20px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: pointer;
`;

const BottomSheetDesc = styled.p`
${font.H4};
	color: ${color.black};
	text-align: center;
	margin: 36px 0 46px;
`;