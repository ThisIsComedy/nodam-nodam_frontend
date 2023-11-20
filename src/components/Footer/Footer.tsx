import React from "react";
import styled from "styled-components";
import color from "../../styles/color";
import GNBButton from "./GNBButton";
import { Link } from "react-router-dom";

const Footer = (props: { isGNB: boolean; page: number }) => {
	const containerStyle = {
		backgroundColor: props.isGNB ? color.white : "",
		height: props.isGNB ? "90px" : "34px",
	};

	const GNBArray = [
		{
			text: "홈",
			icon: [
				"/assets/footer/home_active.png",
				"/assets/footer/home_default.png",
			],
			endpoint: "/"
		},
		{
			text: "기록",
			icon: [
				"/assets/footer/record_active.png",
				"/assets/footer/record_default.png",
			],
			endpoint: "/record"
		},
		{
			text: "랭킹",
			icon: [
				"/assets/footer/ranking_active.png",
				"/assets/footer/ranking_default.png",
			],
			endpoint: "/ranking"
		},
		{
			text: "프로필",
			icon: [
				"/assets/footer/profile_active.png",
				"/assets/footer/profile_default.png",
			],
			endpoint: "/profile"
		},
	];

	return (
		<Container style={containerStyle}>
			{props.isGNB && (
				<GNBContainer>
					{GNBArray.map((e, i) => {
						return (
							<Link to={e.endpoint}>
								<GNBButton
									index={i + 1}
									text={e.text}
									icon={e.icon}
									isActive={props.page === i + 1 ? true : false}
								/>
							</Link>
						);
					})}
				</GNBContainer>
			)}
			<HomeIndicator src='/assets/global/HomeIndicator.png' />
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 0;
	z-index: 3;
	border-radius: 0 0 49px 49px;
`;

const HomeIndicator = styled.img`
	height: 34px;
	width: 390px;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const GNBContainer = styled.div`
	border-top: 1px solid ${color.gray200};
	height: 56px;
	width: 390px;
	display: flex;
	flex-direction: row;
	gap: 14px;
	padding: 0 16px;
`;
