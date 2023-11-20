import React from 'react';
import styled from "styled-components";
import color from "../../styles/color";
import GrassCell from './GrassCell';

const GrassChart = (props: { smokingDate: Array<object> }) => {

	return (
		<Container>
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={true} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
			<GrassCell isSmoked={false} />
		</Container>
	);
};

export default GrassChart;

const Container = styled.div`
	display: flex;
	height: 182px;
	width: 100%;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 16px;
	gap: 4px;
	background-color: ${color.white};
	border-radius: 16px;
`;

