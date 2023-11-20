import React from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const TopSmokingReasonBox = () => {
	const topSmokingReason = [
		{
			type: "언제",
			reason: "점심 식사 직후",
			rate: 3,
		},
		{
			type: "어디서",
			reason: "식당에서",
			rate: 2,
		},
		{
			type: "왜",
			reason: "친구의 권유로 어쩔 수 없이",
			rate: 5,
		},
	];

	return (
		<Container>
			<Title>TOP 흡연 원인</Title>
			{
				topSmokingReason.map((e, i) => {
					return (
						<ReasonGroup>
							<Type>{e.type}</Type>
							<TextGroup>
								<Text>{e.reason}</Text>
								<Text>{e.rate}회</Text>
							</TextGroup>
						</ReasonGroup>
					);
				})
			}
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