import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

import Layout from "../../layout/Layout";
import Screen from "../../layout/Screen/Screen";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	return (
		<Layout>
			<Screen bgcolor={color.gray200}>
				<Section>
					{/* <iframe
						src='https://scratch.mit.edu/projects/924815380/embed'
						width='390'
						height='340'></iframe> */}
				</Section>
				<Footer isGNB={true} page={1} />
			</Screen>
		</Layout>
	);
};

export default Home;

const Section = styled.div`
	width: 100%;
	height: 100%;
`;
