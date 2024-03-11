
import { BeerDetailsProps } from "./types/beer";

const BeerDetails = ({ beer, onBackClick }: BeerDetailsProps) => {
  return (
    <div className="beer-details">
      <h2 className="name">Name: {beer.name}</h2>
      <p className="tag"> Tagline:{beer.tagline}</p>
      <div className="des">
        <h2>Description:</h2> {beer.description}
      </div>
      <p className="abv">ABV: {beer.abv}</p>
      <div className="tips">
        <h2>Brewers Tips: </h2>
        {beer.brewers_tips}
      </div>
      <div className="ing">
        <h3 >Ingredients:</h3>
        <ul>
          {beer.ingredients.malt.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.amount.value}{" "}
              {ingredient.amount.unit}
            </li>
          ))}
        </ul>
      </div>
      <div className="food">
       
        <h3>Food Pairing:</h3>
        <ul>
          {beer.food_pairing.map((pairing, index) => (
            <li key={index}>{pairing}</li>
          ))}
        </ul>
      </div>
      <button onClick={onBackClick}>Back to all beers</button>
    </div>
  );
};

export default BeerDetails;
