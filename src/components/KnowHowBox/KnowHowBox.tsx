import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const KnowHowBox = () => {
	const knowHowList = [
		{
			title: "금단증상이 심해진다면?",
			desc: "클릭해서 해결 방법 알아보기",
		},
	];

	return (
		<Container onClick={() =>
			window.open(
				"https://clinic.paju.go.kr/clinic/clinic_03/clinic_03_01/clinic_03_01_14.jsp"
			)
		}>
			<KnowHowBoxTitle>{knowHowList[0].title}</KnowHowBoxTitle>
			<KnowHowBoxDesc>{knowHowList[0].desc}</KnowHowBoxDesc>
		</Container>
	);
};

export default KnowHowBox;

const Container = styled.div`
	display: flex;
	width: 100%;
	background-color: ${color.white};
	border-radius: 16px;
	gap: 4px;
	flex-direction: column;
	padding: 10px 16px;
	cursor: pointer;
`;

const KnowHowBoxTitle = styled.p`
	${font.p3}
	color: ${color.gray700};
`;

const KnowHowBoxDesc = styled.p`
	${font.body2}
	color: ${color.black};
`;
