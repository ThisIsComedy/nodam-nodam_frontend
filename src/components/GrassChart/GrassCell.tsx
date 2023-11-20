import React from 'react';
import styled from "styled-components";
import color from "../../styles/color";

const GrassCell = (props: { isSmoked: boolean }) => {
	return (
		<>
			{
				props.isSmoked ? <DefaultCell /> : <ActivedCell />
			}
		</>

	);
};

const ActivedCell = styled.div`
	width: 18px;
	height: 18px;
	background-color: ${color.nodamGreen};
	border-radius: 4px;
`;

const DefaultCell = styled.div`
	width: 18px;
	height: 18px;
	background-color: ${color.gray200};
	border-radius: 4px;
`;

export default GrassCell;