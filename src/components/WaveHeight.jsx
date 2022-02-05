// import React from 'react';
import { useFetch } from '../hooks/useFetch';
// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import heightIcon from '../assets/height.svg';

const WaveHeight = ({ spot }) => {
	// NWS - Web Service: https://www.ncdc.noaa.gov/cdo-web/webservices/v2
	// NWS - noaa token: URsWQYxfQLMcEfTEtwvWTHlYlMYQUwTx

	// National Data Buoy Center - Sensor Observation Service (SOS): https://sdf.ndbc.noaa.gov/sos/

	// EMC Operational Wave Models: https://polar.ncep.noaa.gov/waves/index.php
	// Global Forecast System - Wave: https://polar.ncep.noaa.gov/waves/viewer.shtml?-gfswave-
	// Nearshore Wave Prediction System: https://polar.ncep.noaa.gov/nwps/

	// Surfline endpoints:
	// 'http://api.surfline.com/v1/forecasts/4991?resources=surf&days=1&getAllSpots=false&units=e&interpolate=true&showOptimal=false';
	// 'https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=5842041f4e65fad6a7708dec&days=16&intervalHours=1&maxHeights=true';

	// TODO:
	// Info about all of noaa data can be found at: http://www.ndbc.noaa.gov/docs/ndbc_web_data_guide.pdf
	// 1. Pull data from .txt (https://www.ndbc.noaa.gov/data/realtime2/51206.txt) (https://www.ndbc.noaa.gov/data/realtime2/51206.spec)
	// 2. Clean data
	// 3. Display clean data

	// const url = `https://www.ndbc.noaa.gov/data/realtime2/${buoy_id}.txt`;

	const heightEndpoint = '';
	const { data: heightData } = useFetch(heightEndpoint, {}, [ spot.noaa_station_id ]);

	if (heightData) {
		console.log(heightData);
	}

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={heightIcon} alt="Wave Height Icon" />
				<h3>Wave Height</h3>
			</Flex>
			<div className="grid-item__body">
				<p>N/A</p>
			</div>
			<div className="grid-item__chart" />
		</StyledGridItem>
	);
};

export default WaveHeight;
