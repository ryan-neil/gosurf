import { useEffect, useState } from 'react';
import { getTodaysDate, convertMetersToFeet, roundNumber } from '../helpers/utils';
import { useFetch } from '../hooks/useFetch';
// Components
import GridItemHeading from './GridItemHeading';
import WaveBody from './WaveBody';
import Loading from './Loading';
import FetchError from './FetchError';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import waveIcon from '../assets/wave.svg';

const Wave = ({ spot }) => {
	// Resource: https://daveceddia.com/react-before-render/
	// Resource: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/

	const { fullDateHyphen } = getTodaysDate();
	const reqParams = ['waveHeight', 'wavePeriod'];
	const endpoint = `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lon}&params=${reqParams}&start=${fullDateHyphen}&end=${fullDateHyphen}T23:00`;
	const {
		response: waveData,
		loading,
		error,
	} = useFetch(endpoint, {
		headers: {
			Authorization: process.env.REACT_APP_SG_KEY,
		},
	});

	// const waveHeights = response.hours.map((wave) =>
	// 	roundNumber(convertMetersToFeet(wave.waveHeight.noaa))
	// );
	// console.log(waveHeights);

	return (
		<StyledGridItem>
			<GridItemHeading icon={waveIcon} title="Wave Height" />
			{loading && <Loading />}
			{waveData && !loading ? (
				<WaveBody waveData={waveData} />
			) : (
				!loading && <FetchError name="Wave" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Wave;
