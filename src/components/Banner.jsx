import { useFetch } from '../hooks/useFetch';
// styles
import styled from 'styled-components';
import { Flex } from './styles/Utils.styled';
const StyledBanner = styled.section`
	.banner-container {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
		gap: 1.4rem;
		min-width: 100%;
		height: auto;
		background-color: ${({ theme }) => theme.colors.secondaryBG};
		padding: 1rem;
		border-radius: ${({ theme }) => theme.styles.borderRadiusMd};
		overflow-x: scroll;
	}
	.banner-item {
		height: auto;
		min-width: 200px;
	}
`;

const Banner = ({ spot }) => {
  // fetch air temperature data
	const airTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=air_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { data: airData } = useFetch(airTempEndpoint, [ spot.noaa_station_id ]);
  
  // fetch water temperature data
	const waterTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=water_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { data: waterData } = useFetch(waterTempEndpoint, [ spot.noaa_station_id ]);

  if (airData && waterData) {
		// console.log(airData);
		// console.log(waterData);
	}

	return (
		<>
			{airData && waterData && (
        <StyledBanner>
          <div className="banner-container">
            <div className="banner-item">
              <h4>Ideal Times to Surf</h4>
              <p>N/A</p>
              <p>N/A</p>
            </div>
            <div className="banner-item">
              <h4>Water Temperature</h4>
              <Flex gapSm>
                <p>{`${waterData.data[0].v}°F`}</p>
              </Flex>
            </div>
            <div className="banner-item">
              <h4>Air Temperature</h4>
              <Flex gapSm>
                <p>{`${airData.data[0].v}°F`}</p>
              </Flex>
            </div>
            <div className="banner-item">
              <h4>Light</h4>
              <Flex spaceBetween gapSm>
                <p>Sunrise</p>
                <p>N/A</p>
              </Flex>
              <Flex spaceBetween gapSm>
                <p>Sunset</p>
                <p>N/A</p>
              </Flex>
            </div>
          </div>
        </StyledBanner>
			)}
		</>
	);
};

export default Banner;
