import { useState } from 'react';
// Styles
import { StarBorderIcon, StarIcon } from './FavoriteToggle.styled';

const FavoriteToggle = () => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    return favorite === false ? setFavorite(true) : setFavorite(false);
  };

  // set theme icon
  const favoriteIcon =
    favorite === false ? (
      <StarBorderIcon onClick={toggleFavorite} />
    ) : (
      <StarIcon onClick={toggleFavorite} />
    );

  return <span>{favoriteIcon}</span>;
};

export default FavoriteToggle;
