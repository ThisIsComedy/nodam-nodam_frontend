import React, { Dispatch, useState } from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import Footer from "../../components/Footer/Footer";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import RetryPage from "../../components/Retry/RetryPage";
import { Step } from "./types";

const RetryForm = () => {
	const [step, setStep] = useState<Step>(1);

	return (
		<Layout>
			<Screen bgcolor={color.white}>
				<Section>
					<Header>
						<Title>금연 재도전</Title>
						<CloseIcon src="/assets/global/close.svg" onClick={() => { window.location.href = "/home" }} />
					</Header>
					<BoxContainer isGNB={false} >
						<RetryPage step={step} setStep={setStep} />
					</BoxContainer>
				</Section>
				<Footer isGNB={false} page={0} />
			</Screen>
		</Layout>
	);
};

export default RetryForm;

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
	justify-content: center;
`;

const Title = styled.p`
	${font.H3};
	color: ${color.black};
`;

const CloseIcon = styled.img`
	position: absolute;
	width: 24px;
	height: 24px;
	right: 16px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	cursor: pointer;
`;