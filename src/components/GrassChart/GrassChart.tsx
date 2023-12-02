import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import color from "../../styles/color";
import GrassCell from './GrassCell';
import { GrassType } from "../../pages/Record/type";
import { SmokedDataType, smokedDataTypeDefault } from "./type";
import { getCurrentDate, getNonSmokedDates } from "./utils";

const GrassChart = ({ grass }: { grass: GrassType }) => {

	const [data, setData] = useState<SmokedDataType[]>(smokedDataTypeDefault);

	useEffect(() => {
		const nonSmokedDates = getNonSmokedDates(grass).map(date => ({ date, smoked: true }));
		const smokedDates = grass.userSmokedAtResponses.map(date => ({ date, smoked: false }));

		setData([...nonSmokedDates, ...smokedDates]
				.sort((a, b) => {
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				})
		);
	}, []);
	const day = new Date().getDay();
	const nonSmokedDay = (15 * 7) - data.length - (6 - day);

	return (
		<Container>
			{Array.from(Array(nonSmokedDay), () => (<GrassCell isSmoked={true} />))}
			{data.map((value) => <GrassCell isSmoked={!value.smoked} />)}
			{Array.from(Array(6 - day), () => (<EmptyCell />))}
		</Container>
	);
};

export default GrassChart;

const Container = styled.div`
	display: flex;
	height: 182px;
	width: 100%;
	flex-direction: column;
	align-items: end;
	flex-wrap: wrap;
	padding: 16px;
	gap: 4px;
	background-color: ${color.white};
	border-radius: 16px;
`;

const EmptyCell = styled.div`
	width: 18px;
	height: 18px;
`;