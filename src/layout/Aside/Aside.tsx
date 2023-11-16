import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const Aside = () => {
	return (
		<Container>
			<TitleBox>
				<LogoBox>
					<Slogan>난 네가 노담이었으면 좋겠어</Slogan>
					<Logo src='/assets/global/nodamnodamlogo.png' />
				</LogoBox>
				<Developer>2106 마현우, 2109 신준서</Developer>
			</TitleBox>
			<InformationContainer>
				<NotionButton>
					<NotionLogo src='/assets/global/notion.png' />
					<NotionTextBox>
						<NotionButtonTitle>노담노담 더 알아보기</NotionButtonTitle>
						<NotionButtonDesc>클릭해서 노션 페이지로 이동</NotionButtonDesc>
					</NotionTextBox>
				</NotionButton>
				<HelpBox>
					<HelpBoxTitle>
						<WarnIcon src='/assets/global/error.png' />
						<HelpBoxTitleText>화면이 짤려서 보인다면?</HelpBoxTitleText>
					</HelpBoxTitle>
					<HelpBoxDesc>
						만약 화면이 짤려서 보인다면 페이지를 축소하여 <br />
						화면 사이즈에 맞게 조절해주시기 바랍니다.
					</HelpBoxDesc>
				</HelpBox>
			</InformationContainer>
		</Container>
	);
};

const Container = styled.div`
	width: 320px;
	display: flex;
	flex-direction: column;
	gap: 64px;
`;

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
	justify-content: center;
	align-items: center;
`;

const LogoBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 16px;
`;

const Slogan = styled.p`
	${font.H5}
	color: ${color.gray600};
`;

const Logo = styled.img`
	width: 300px;
`;

const Developer = styled.p`
	${font.p1}
	color: ${color.black};
	text-align: center;
`;

const InformationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 12px;
`;

const NotionButton = styled.div`
	display: flex;
	width: 320px;
	height: 80px;

	border-radius: 16px;
	border: 1px solid ${color.gray200};

	padding: 16px 20px;
	align-items: center;
	gap: 16px;
`;

const NotionLogo = styled.img`
	width: 40px;
`;

const NotionTextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 2px;
`;

const NotionButtonTitle = styled.p`
	${font.body1}
	color: ${color.black};
`;

const NotionButtonDesc = styled.p`
	${font.p2}
	color: ${color.gray600};
`;

const HelpBox = styled.div`
	display: flex;
	width: 320px;
	height: 110px;
	flex-direction: column;

	border-radius: 16px;
	border: 1px solid ${color.gray200};

	padding: 16px 20px;
	align-items: flex-start;
	gap: 12px;
`;

const HelpBoxTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

const WarnIcon = styled.img`
	width: 24px;
`;

const HelpBoxTitleText = styled.p`
	${font.body1}
	color: ${color.black};
`;

const HelpBoxDesc = styled.p`
	${font.p2}
	color: ${color.gray600};
`;

export default Aside;
