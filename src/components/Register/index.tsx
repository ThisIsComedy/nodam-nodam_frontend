import React, {Dispatch, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import font from "../../styles/font";
import { Step } from "../../pages/register/types";
import color from "../../styles/color";
import LargeButton from "../atoms/LargeButton";
import TwoButton from "../atoms/TwoButton";
import {register} from "../../apis";
import {Link} from "react-router-dom";
import {isNameValid, isNumber} from "../../pages/register/validate";

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
    const [name, setName] = useState<string>("");
    const [smokePerDay, setSmokePerDay] = useState<number>(0);
    const [cigarettePrice, setCigarettePrice] = useState<number>(0);

    useEffect(() => {
        const email = localStorage.getItem("email") ?? "";

        if (!email || email === "") {
            alert("다시 로그인 해주세요");
            window.location.href = "/onboarding";
        }
    }, []);


    const enteredDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = getData?.id;
        if (id === 1) setName(e.target.value);
        if (id === 2) setSmokePerDay(parseInt(e.target.value));
        if (id === 3) setCigarettePrice(parseInt(e.target.value));
    };

    const onNext = async () => {
        const email = localStorage.getItem("email") ?? "";

        if (props.step === 1 && isNameValid(name)) {
            props.setStep((props.step as number) + 1 as Step);
        }

        if (props.step === 2 && isNumber(smokePerDay)) {
            props.setStep((props.step as number) + 1 as Step);
        }

        if (props.step === 3 && isNumber(cigarettePrice)) {
            const data = await register({
                email,
                name,
                smokePerDay,
                cigarettePrice
            });

            localStorage.removeItem("email");

            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);

            window.location.href = "/";
        }
    };

    const onPrevious = (): void => {
        props.setStep((props.step as number) - 1 as Step);
    };

    const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onNext();
        }
    }

    return (
        <>
            <Container>
                <Header>
                    <Link to="/onboarding"><LeftArrow src="/assets/register/left_arrow.svg"/></Link>
                    <Register>회원가입</Register>
                </Header>
                <Title>{getData && getData.title}</Title>
                <InputContent>{getData && getData.inputContent}</InputContent>
                <Input>
                    <InputBox
                        step={getData && getData.id}
                        placeholder={getData && getData.title}
                        onChange={enteredDataHandler}
                        onKeyPress={onPressEnter}
                    />
                    {(getData && getData.id !== 1) && <Unit>{getData && getData.unit}</Unit>}
                </Input>
                {(getData && (getData.id === 1))
                    ? <LargeButton
                        text="다음"
                        isLarge={true}
                        onClick={onNext}
                    />
                    : <TwoButton
                        large="다음"
                        small="이전"
                        largeOnClick={onNext}
                        smallOnClick={onPrevious}
                    />}
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