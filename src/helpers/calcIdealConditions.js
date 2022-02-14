export const calcIdealConditions = (spot) => {
	const idealWaveHeight = spot.ideal_conditions.surf_height;
	const idealTide = spot.ideal_conditions.tide;
	const idealWindDirection = spot.ideal_conditions.wind;
	const idealSwellDirection = spot.ideal_conditions.swell_direction;

	return {
		wave,
		tides,
		wind,
		swell,
	};
};
