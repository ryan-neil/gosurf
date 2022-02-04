import { useFetch } from '../hooks/useFetch';
// Components
import Loading from './Loading'
import FetchError from './FetchError'
// Styles
import { StyledBanner } from './styles/Banner.styled';
import { Flex } from './styles/Utils.styled';
import waterIcon from '../assets/water.svg'
import airIcon from '../assets/air.svg'


const Banner = ({ spot }) => {
  // Alternative hourly forecast endpoint: `https://api.weather.gov/points/${lat},${lon}` 

  // fetch air temperature data
	const airTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=air_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { data: airData, loading, error } = useFetch(airTempEndpoint, {}, [ spot.noaa_station_id ]);
  
  // fetch water temperature data
	const waterTempEndpoint = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?=&product=water_temperature&station=${spot.noaa_station_id}&date=latest&units=english&datum=MLLW&time_zone=lst_ldt&format=json&application=NOS.COOPS.TAC.TidePred&interval=hilo`;
	const { data: waterData } = useFetch(waterTempEndpoint, {}, [ spot.noaa_station_id ]);

  if (airData && waterData) {
		// console.log(airData);
		// console.log(waterData);
	}

	return (
		<>
    {loading && <Loading />}
    {error && !loading && <FetchError error={error}/>}
    {airData && waterData && !loading && (
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
              <img src={waterIcon} alt="Water Temperature Icon" />
              <p>{`${waterData.data[0].v}°F`}</p>
            </Flex>
          </div>
          <div className="banner-item">
            <h4>Air Temperature</h4>
            <Flex gapSm>
              <img src={airIcon} alt="Air Temperature Icon" />
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
