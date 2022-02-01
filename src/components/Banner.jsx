import FetchError from './FetchError';

// styles
import styled from 'styled-components';
import { Flex } from './styles/Utils.styled';
const StyledBanner = styled.section`
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.secondaryBG};
	padding: 1rem;
	border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
`;

const Banner = ({ data }) => {
	// check if data is null before using it...
	console.log(data);

	// const temp = spot.current.temp;
	// console.log(temp);

	return (
		<StyledBanner>
      {data && (
        <>
        <div>
          <h4>Ideal Times to Surf</h4>
          <p>07:00 AM - 09:00 AM (HST)</p>
          <p>04:00 PM - 05:00 PM (HST)</p>
        </div>
        <div>
          <h4>Water Temperature</h4>
          <Flex gapSm>
            <p>80°F</p>
          </Flex>
        </div>
        <div>
          <h4>Air Temperature</h4>
          <Flex gapSm>
            <p>{`${data.current.temp}°F`}</p>
          </Flex>
          <p>{`UV: ${data.current.uvi}`}</p>
          <p>{data.current.weather[0].description}</p>
        </div>
        <div>
          <h4>Light</h4>
          <Flex gapSm>
            <p>Sunrise</p>
            <p>{data.current.sunrise}</p>
          </Flex>
          <Flex gapSm>
            <p>Sunset</p>
            <p>{data.current.sunset}</p>
          </Flex>
        </div>
        </>
      )}
			
		</StyledBanner>
	);
};

export default Banner;
