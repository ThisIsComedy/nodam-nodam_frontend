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
	padding: 12px 16px;
	max-height: 715px;
	overflow: hidden;
	overflow-y:auto;
	&::-webkit-scrollbar {
  	display: none;
	}	
	-ms-overflow-style: none; 
	scrollbar-width: none;
`;