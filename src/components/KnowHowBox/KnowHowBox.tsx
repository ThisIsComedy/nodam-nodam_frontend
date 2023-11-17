import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const KnowHowBox = () => {
	const knowHowList = [
		{
			title: "금단증상이 심해진다면?",
			desc: "이 방법을 따라해보세요!",
		},
	];

	return (
		<Container>
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
`;

const KnowHowBoxTitle = styled.p`
	${font.p3}
	color: ${color.gray700};
`;

const KnowHowBoxDesc = styled.p`
	${font.body2}
	color: ${color.black};
`;
