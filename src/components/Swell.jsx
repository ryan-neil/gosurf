// Components
import Loading from './Loading';
import FetchError from './FetchError';
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
		'secondarySwellPeriod',
	];

	const swellData = true;
	const loading = false;
	const error = 'Fetch error';

	return (
		<StyledGridItem>
			<Flex gapSm>
				<img src={swellIcon} alt="Swell Icon" />
				<h3>Swell</h3>
			</Flex>
			{loading && <Loading />}
			{swellData && !loading ? (
				<>
					<div className="grid-item__body">
						<p>N/A</p>
					</div>
					<div className="grid-item__chart" />
				</>
			) : (
				!loading && <FetchError name="Swell" error={error} />
			)}
		</StyledGridItem>
	);
};

export default Swell;
