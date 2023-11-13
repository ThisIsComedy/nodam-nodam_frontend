import Aside from "./Aside/Aside";
import styled from "styled-components";
import GlobalStyle from "../styles/global";

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Aside />
				<Main>
					<Mockup src='/assets/global/iPhone14.png' />
					<Screen>{props.children}</Screen>
				</Main>
			</Container>
		</>
	);
};

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
	z-index: 2;
`;

const Screen = styled.div`
	width: 390px;
	height: 844px;
	/* background-color: salmon; */
	position: absolute;
	z-index: 1;
	top: 19.5px;
	left: 23.5px;
	padding-top: 47px;
	padding-bottom: 34px;
`;

export default Layout;
