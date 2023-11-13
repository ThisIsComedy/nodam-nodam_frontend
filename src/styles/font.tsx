import { css } from "styled-components";

const fontGenerator = (
	weight: number,
	size: number,
	lineHeight: number,
) => css`
	font-family: "Pretendard";
	font-weight: ${weight};
	font-size: ${size}rem;
	line-height: ${lineHeight}%;
	font-feature-settings: 'ss05' on;
`;

const font = {
	H1: fontGenerator(700, 2, 140), // 32px
	H2: fontGenerator(700, 1.5, 140), // 24px
	H3: fontGenerator(600, 1.375, 140), // 22px
	H4: fontGenerator(500, 1.25, 140), // 20px
	H5: fontGenerator(500, 1.125, 150), // 18px

	body1: fontGenerator(500, 1, 150), // 16px
	body2: fontGenerator(500, 0.875, 150), // 14px
	body3: fontGenerator(500, 0.75, 150), // 12px

	p1: fontGenerator(400, 1, 150), // 16px
	p2: fontGenerator(400, 0.875, 150), // 14px
	p3: fontGenerator(400, 0.75, 150), // 12px
};

export default font;
