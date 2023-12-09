import React, { Dispatch } from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";
import { Step } from '../../pages/RetryForm/types';
import { useRecoilState } from 'recoil';

interface EntryFieldType {
	id: Step;
	title: string;
	key: string;
	answerList: string[];
};

const data: EntryFieldType[] = [
	{
		id: 1,
		title: "언제 흡연했는지 선택해주세요",
		key: "when",
		answerList: [
			"출근할 때",
			"퇴근할 때",
			"점심식사 직후",
			"저녁식사 직후",
			"업무 중간에",
			"술 마신 후",
			"밤에",
			"새벽에",
		]
	},
	{
		id: 2,
		title: "어디서 흡연했는지 선택해주세요",
		key: "where",
		answerList: [
			"집앞에서",
			"직장에서",
			"식당에서",
			"골목에서",
			"공원에서",
			"PC방에서",
			"길거리에서",
			"집에서",
		]
	},
	{
		id: 3,
		title: "왜 흡연했는지 선택해주세요",
		key: "why",
		answerList: [
			"금단현상 때문에",
			"지인이 권유해서",
			"갑자기 피고 싶어져서",
		]
	},
];

const RetryPage = (props: { step: Step, setStep: Dispatch<React.SetStateAction<Step>> }) => {
	const getData: EntryFieldType = data[props.step - 1];
  // const [info, setInfo] = useRecoilState<UserAdditionalInfo>(registerState);

	return (
		<Container>
			
		</Container>
	);
};

export default RetryPage;

const Container = styled.div`
	
`;