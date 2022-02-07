// Styles
import { StyledGridItem } from './styles/Forecast.styled';
import { Flex } from './styles/Utils.styled';
import swellIcon from '../assets/swell.svg';

const Swell = () => {
	const reqParams = [
		'swellHeight',
		'swellDirection',
		'swellPeriod',
		'secondarySwellHeight',
		'secondarySwellDirection',
		'secondarySwellPeriod'
	];

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={swellIcon} alt="Swell Icon" />
				<h3>Swell</h3>
			</Flex>
			<div className="grid-item__body">
				<p>N/A</p>
			</div>
			<div className="grid-item__chart" />
		</StyledGridItem>
	);
};

export default Swell;
