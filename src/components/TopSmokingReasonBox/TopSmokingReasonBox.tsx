import React, {useEffect} from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";
import {SmokeType} from "../../pages/Record/type";

const TopSmokingReasonBox = ({ smoke }: { smoke: SmokeType }) => {

	return (
		<Container>
			<Title>TOP 흡연 원인</Title>
			<ReasonGroup>
				<Type>언제</Type>
				<TextGroup>
					<Text>{smoke.when}</Text>
					<Text>{smoke.whenCount}회</Text>
				</TextGroup>
			</ReasonGroup>
			<ReasonGroup>
				<Type>어디서</Type>
				<TextGroup>
					<Text>{smoke.where}</Text>
					<Text>{smoke.whereCount}회</Text>
				</TextGroup>
			</ReasonGroup>
			<ReasonGroup>
				<Type>왜</Type>
				<TextGroup>
					<Text>{smoke.why}</Text>
					<Text>{smoke.whyCount}회</Text>
				</TextGroup>
			</ReasonGroup>
		</Container>
	);
};

export default TopSmokingReasonBox;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	background-color: ${color.white};
	padding: 20px;
	border-radius: 16px;
`;

const Title = styled.p`
	${font.H5};
	color: ${color.gray600};
`;

const ReasonGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const Type = styled.p`
	${font.body1};
	color: ${color.gray600};
`;

const TextGroup = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

const Text = styled.p`
	${font.H5};
	color: ${color.black};
`;