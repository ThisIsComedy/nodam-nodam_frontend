import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
	return (
		<Layout>
			<Screen bgcolor={color.white}>
				<Section>
					<NotificationGroup>
						<Nodam404Image src="/assets/404/nodam404.png" />
						<Title>페이지를 찾을 수 없습니다</Title>
						<Desc>
							요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.<br />
							걱정 마세요, 최고의 탐험가도 때로는 길을 잃을 때가 있죠.
						</Desc>
					</NotificationGroup>
				</Section>
				<Footer isGNB={true} page={0} />
			</Screen>
		</Layout>
	);
};

export default NotFound;

const Section = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NotificationGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 173px;
`;

const Nodam404Image = styled.img`
	width: 200px;
	margin-bottom: 32px;
`;

const Title = styled.p`
	${font.H2};
	color: ${color.black};
	margin-bottom: 12px;
`;

const Desc = styled.p`
	${font.p2};
	color: ${color.gray600};
	text-align: center;
`;