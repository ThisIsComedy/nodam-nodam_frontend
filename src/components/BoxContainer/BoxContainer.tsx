import React from 'react';
import styled from "styled-components";

const BoxContainer = (props: { children: React.ReactNode; }) => {
	return (
		<Container>
			{props.children}
		</Container>
	);
};

export default BoxContainer;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	gap: 12px;
	padding: 0 16px;
`;