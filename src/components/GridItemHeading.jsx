// Styles
import { Flex } from './styles/Utils.styled';

const GridItemHeading = ({ icon, title }) => {
	return (
		<Flex gapSm>
			<img src={icon} alt={`${title} Icon`} />
			<h3>{title}</h3>
		</Flex>
	);
};

export default GridItemHeading;
