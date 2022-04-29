import PropTypes from 'prop-types';
// Styles
import { AboutContainerStyled, CardContainerStyled, CardStyled } from './About.styled';
import carIcon from '../../../../assets/car.svg';
import calendarIcon from '../../../../assets/calendar.svg';
import campingIcon from '../../../../assets/camping.svg';

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
      paragraph: `Each surf spot has our “ideal” conditions specific to that spot. This
				is to help you understand your local spot and know when you should be shredding.`,
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
      <CardContainerStyled>
        {content.map((card) => (
          <AboutCard key={card.id} card={card} />
        ))}
      </CardContainerStyled>
    </AboutContainerStyled>
  );
};

// About Card component
const AboutCard = ({ card }) => {
  return (
    <CardStyled>
      <img src={card.icon} alt="Surf Icon" />
      <h3>{card.heading}</h3>
      <p>{card.paragraph}</p>
    </CardStyled>
  );
};

AboutCard.propTypes = {
  card: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.symbol])
  ).isRequired,
};

export default About;
