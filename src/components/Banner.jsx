import styled from 'styled-components';
import { Flex } from './styles/Utils.styled';
const StyledBanner = styled.section`
	display: flex;
	justify-content: space-between;
`;

const Banner = ({ data }) => {
	// console.log('Banner Component render!');
	console.log(data);

	return (
		<StyledBanner>
			<div>
				<h4>Ideal Times to Surf</h4>
				<p>07:00 AM - 09:00 AM (HST)</p>
				<p>04:00 PM - 05:00 PM (HST)</p>
			</div>
			<div>
				<h4>Water Temperature</h4>
				<Flex gapSm>
					<p>icon</p>
					<p>80°F</p>
				</Flex>
			</div>
			<div>
				<h4>Air Temperature</h4>
				<Flex gapSm>
					<p>icon</p>
					<p>{`${80}°F`}</p>
				</Flex>
				<p>{`UV: ${7}`}</p>
				<p>Partly cloudy</p>
			</div>
			<div>
				<h4>Light</h4>
				<Flex gapSm>
					<p>Sunrise</p>
					<p>{`6:07 AM`}</p>
				</Flex>
				<Flex gapSm>
					<p>Sunset</p>
					<p>{`6:57 PM`}</p>
				</Flex>
			</div>
		</StyledBanner>
	);
};

export default Banner;
