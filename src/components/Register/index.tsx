import React, {Dispatch, useState} from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import { Step } from "../../pages/register/types";
import color from "../../styles/color";
import LargeButton from "../atoms/LargeButton";
import TwoButton from "../atoms/TwoButton";

interface EntryFieldType {
    id: Step;
    title: string;
    inputContent: string;
    unit?: string;
    key: string;
};

const data: EntryFieldType[] = [
    {
        id: 1,
        title: "이름을 입력해주세요",
        inputContent: "이름",
        unit: undefined,
        key: "name"
    },
    {
        id: 2,
        title: "하루에 담배를 얼마나 피나요?",
        inputContent: "하루 흡연량",
        unit: "개비",
        key: "smokePerDay"
    },
    {
        id: 3,
        title: "피는 담배의 가격이 얼마인가요?",
        inputContent: "담배 한 갑 가격",
        unit: "원",
        key: "price"
    },
];

const RegisterPage = (props: {step: Step, setStep: Dispatch<React.SetStateAction<Step>>}) => {
    const getData: EntryFieldType | undefined = data.find(v => v.id === props.step);
    const [inputData, setInputData] = useState<string>("");

    return (
        <>
            <Container>
                <Header>
                    <LeftArrow src="/assets/register/left_arrow.svg"/>
                    <Register>회원가입</Register>
                </Header>
                <Title>{getData && getData.title}</Title>
                <InputContent>{getData && getData.inputContent}</InputContent>
                <Input>
                    <InputBox step={getData && getData.id} placeholder={getData && getData.title}/>
                    {(getData && getData.id !== 1) && <Unit>{getData && getData.unit}</Unit>}
                </Input>
                {(getData && (getData.id === 1))
                    ? <LargeButton text="다음" isLarge={true} />
                    : <TwoButton large="다음" small="이전" />}
            </Container>
        </>
    );
};

export default RegisterPage;

const Container = styled.div`
  padding: 0 16px;
`;

const Header = styled.div`
  width: 390px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 120px;
  padding: 0 4px;
  margin-bottom: 125px;
`;

const LeftArrow = styled.img`
  width: 24px;
  height: 24px;
`;

const Register = styled.p`
  ${font.H5};
  color: ${color.black};
`;

const Title = styled.p`
  ${font.H2};
  color: ${color.black};
  margin-bottom: 36px;
`;

const InputContent = styled.p`
  ${font.p1};
  color: ${color.gray700};
  margin-bottom: 8px;
`;
const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 344px;
`;

const InputBox = styled.input`
  width: ${v => v.step === 1 ? "358px" : "100%"};
  height: 56px;
  ${font.H5};
  color: ${color.black};
  padding: 0 16px;
  background-color: ${color.gray100};
  border-radius: 12px;
  
  &::placeholder {
    color: ${color.gray500};
  }
`;

const Unit = styled.p`
  ${font.H4};
  color: ${color.gray700};
  white-space: nowrap;
`;