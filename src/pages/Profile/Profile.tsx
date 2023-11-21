import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Footer from "../../components/Footer/Footer";


const Profile = () => {
	return (
		<Layout>
			<Screen bgcolor={color.gray100}>
				<Section>
					<Header>
						<Title>프로필</Title>
						<LogoutButton>로그아웃</LogoutButton>
					</Header>
					<BoxContainer>

					</BoxContainer>
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