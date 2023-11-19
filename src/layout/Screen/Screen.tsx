import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

const Screen = (props: { children: React.ReactNode; bgcolor: string }) => {
	const Container = styled.div`
		width: 100%;
		height: 100%;
		background-color: ${props.bgcolor};
		position: relative;
		border-radius: 49px;
		padding: 47px 0 0;
		background-image: url("/assets/global/IPhone14_Inner.png");
	`;

	return <Container>{props.children}</Container>;
};

export default Screen;
