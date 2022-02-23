// Styles
import {
	AboutContainerStyled,
	AboutCardContainer,
	AboutCardStyled,
} from './About.styled';
import carIcon from '../../../../assets/car.svg';
import calendarIcon from '../../../../assets/calendar.svg';
import campingIcon from '../../../../assets/camping.svg';

// About component
const About = () => {
	// about section content
	const content = [
		{
			id: 1,
			icon: carIcon,
			heading: `For the casual surfers and adventurers`,
			paragraph: `Check your favorite surf spot without the clutter of unnecessary
				information. After all, we shouldn’t need a PhD in meteorology to check
				the surf!`,
		},
		{
			id: 2,
			icon: calendarIcon,
			heading: `Know when to go`,
			paragraph: `Each surf spot has our “ideal” times for when you should be shredding. This
				is based on each spots preferred conditions.`,
		},
		{
			id: 3,
			icon: campingIcon,
			heading: `Get back to it...`,
			paragraph: `Don’t waist your time, get back to whatever it is you were doing and let us
				check the surf for you.`,
		},
	];

	return (
		<AboutContainerStyled>
			<AboutCardContainer>
				{content.map((card) => (
					<AboutCard key={card.id} card={card} />
				))}
			</AboutCardContainer>
		</AboutContainerStyled>
	);
};

// About Card component
const AboutCard = ({ card }) => {
	return (
		<AboutCardStyled>
			<img src={card.icon} alt="Surf Icon" />
			<h3>{card.heading}</h3>
			<p>{card.paragraph}</p>
		</AboutCardStyled>
	);
};

export default About;
