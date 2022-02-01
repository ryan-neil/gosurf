const ForecastHeader = ({ surfSpot }) => {
	return (
		<div className="forecast-header">
			<h2>{`${surfSpot.name}, ${surfSpot.location.county}, ${surfSpot
				.location.state}`}</h2>
		</div>
	);
};

export default ForecastHeader;
