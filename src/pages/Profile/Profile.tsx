import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import Footer from "../../components/Footer/Footer";
import Badge from "../../components/Badge/Badge";
import { logout } from "../../apis";


const Profile = () => {

	const onLogout = async () => {
		logout();

		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");

		alert("로그아웃 되었습니다.");

		window.location.href = "/";
	};

	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Title>프로필</Title>
						<LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
					</Header>
					<ProfileBoxContainer>
						<ProfileGroup>
							<ProfileImage src="/assets/global/nodamSampleImage.png" />
							<UserName>신준서</UserName>
							<UserEmail>ddoory1103@gmail.com</UserEmail>
						</ProfileGroup>
						<BadgeContainer>
							<Badge title="금연" rate={5} type={0} />
							<Badge title="연속 금연" rate={500000} type={1} />
							<Badge title="아낀 금액" rate={5} type={2} />
							<Badge title="3일 연속 금연" rate={5} type={3} />
						</BadgeContainer>
					</ProfileBoxContainer>
				</Section>
				<Footer isGNB={true} page={4} />
			</Screen>
		</Layout>
	);
};

export default Profile;

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
	justify-content: space-between;
`;

const Title = styled.p`
	${font.H3};
	color: ${color.black};
`;

const LogoutButton = styled.button`
	${font.p2};
	color: ${color.gray600};
`;

const ProfileBoxContainer = styled.div`
	width: 100%;
	height: 559px;
	background-color: ${color.white};
	border-radius: 36px 36px 0 0;
	margin-top: 100px;
	padding: 0 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ProfileGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: -60px;
	margin-bottom: 48px;
`;

const ProfileImage = styled.img`
	width: 120px;
	height: 120px;
	margin-bottom: 16px;
`;

const UserName = styled.p`
	${font.H2};
	color: ${color.black};
	margin-bottom: 8px;
`;

const UserEmail = styled.p`
	${font.p2};
	color: ${color.gray600};
`;

const BadgeContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	row-gap: 36px;
	column-gap: 12px;
`;