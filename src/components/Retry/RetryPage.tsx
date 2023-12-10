import React, { Dispatch, useState } from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";
import { useRecoilState } from 'recoil';
import LargeButton from "../atoms/LargeButton";
import TwoButton from "../atoms/TwoButton";
import { smokeInfoState } from "../../pages/RetryForm/store/state";
import { Step, SmokeType, Moment, Place, Why } from "../../pages/RetryForm/types";
import { postSmoke } from "../../apis";

interface EntryFieldType {
	id: Step;
	title: string;
	key: string;
	answerList: string[];
}

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

const moments: Moment[] = [
	"GO_TO_THE_OFFICE",
	"LEAVE_THE_OFFICE",
	"AFTER_LUNCH",
	"AFTER_DINNER",
	"ON_WORK",
	"AFTER_DRINKING",
	"NIGHT",
	"DAWN",
];

const places: Place[] = [
	"IN_FRONT_OF_HOME",
	"AT_WORK",
	"RESTAURANT",
	"ALLEY",
	"PARK",
	"INTERNET_CAFE",
	"STREET",
];

const whys: Why[] = [
	"WITHDRAWAL_SYMPTOM",
	"HOW_ABOUT",
	"JUST_WANT"
];

const RetryPage = (props: { step: Step, setStep: Dispatch<React.SetStateAction<Step>> }) => {
	const getData: EntryFieldType = data[props.step - 1];

  const [info, setInfo] = useRecoilState<SmokeType>(smokeInfoState);
	const [active, setActive] = useState<number>(0);
	const [lock, setLock] = useState<boolean>(false);

	const postSmokeData = async () => {
		await postSmoke(info);

		window.location.href = "/home";
	};

	return (
		<Container onClick={() => console.log(props.step)}>
			<Section>
				<Title>{getData?.title ?? ""}</Title>
				<OptionWrap>
					{getData.answerList.map((obj, idx) => (
							<Option
								isActive={active === idx}
								onClick={() => {
									setActive(idx);
									setInfo({
										moment: props.step === 1 ? moments[idx] : info.moment,
										place: props.step === 2 ? places[idx] : info.place,
										why: props.step === 3 ? whys[idx] : info.why
									})
								}}
							>{obj}
							</Option>
					))}
					{Array(8 - getData.answerList.length).fill(<EmptyOption />)}
				</OptionWrap>
			</Section>
			{props.step === 1
			? <LargeButton
					text="다음"
					isLarge={true}
					onClick={() => {
						props.setStep((props.step as number) + 1 as Step)
					}}
			/>
			: <TwoButton
					large="다음"
					small="이전"
					largeOnClick={() => {
						if (lock) {
							return;
						}
						if (props.step === 3) {
							postSmokeData();
							setLock(true);
							return;
						}
						props.setStep((props.step as number) + 1 as Step)
					}}
					smallOnClick={() => {
						props.setStep((props.step as number) - 1 as Step);
					}}
			/>}
		</Container>
	);
};

export default RetryPage;

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 172px;
	margin-top: 125px;
`;

const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
`;

const Title = styled.div`
	${font.H2};
	color: ${color.black};
`;

const OptionWrap = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 12px;
`;

const EmptyOption = styled.input`
	width: 173px;
	height: 56px;
`;

const Option = styled.div<{ isActive: boolean }>`
	width: 173px;
	height: 56px;
	${font.p1};
	color: ${color.black};
	border-radius: 16px;
	background-color: ${({ isActive }) => isActive ? color.nodamGreen : color.gray100};
	display: flex;
	justify-content: center;
	align-items: center;
	
	&:hover {
		cursor: pointer;
	}
`;