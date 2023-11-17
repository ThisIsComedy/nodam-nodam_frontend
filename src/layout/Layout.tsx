import Aside from "./Aside/Aside";
import styled from "styled-components";
import font from "../styles/font";
import color from "../styles/color";
import Footer from "../components/Footer/Footer";

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<Container>
			<Aside />
			<Main>
				<Mockup src='/assets/global/iPhone14.png' />
				<Screen>{props.children}</Screen>
			</Main>
		</Container>
	);
};

export default Layout;

const Container = styled.div`
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 120px;
`;

const Main = styled.main`
	margin: 0;
	padding: 0;
	position: relative;
	height: 883px;
	width: 437px;
`;

const Mockup = styled.img`
	height: 883px;
	width: 437px;
	position: absolute;
	z-index: 1;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const Screen = styled.div`
	width: 390px;
	height: 844px;
	/* background-color: #fff; */
	position: absolute;
	z-index: 2;
	top: 19.5px;
	left: 23.5px;
	/* padding: 47px 0 34px; */
	/* border-radius: 49px; */
`;