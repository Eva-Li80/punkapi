import { BeerDetailsProps } from "./types/beer";

const BeerDetails = ({ beer, onBackClick }: BeerDetailsProps) => {
  return (
    <div className="beer-details">
      <div className="tag-abv">
      <h1 className="name">Name: {beer.name}</h1>
        <h4 className="tag"> Tagline: {beer.tagline}</h4>
        <h3 className="abv">ABV: alc {beer.abv} %</h3>

        <div className="ing">
          <h2>Ingredients:</h2>
          <ul>
            {beer.ingredients.malt.map((ingredient, index) => (
              <li key={index}>
                <h2> {ingredient.name}: </h2>
                <p>{ingredient.amount.value} </p>{" "}
                <p>{ingredient.amount.unit}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="food">
          <h2>Food Pairing:</h2>
          <ul>
            {beer.food_pairing.map((pairing, index) => (
              <li key={index}>
                <p>{pairing}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="des">
          <h2>Description:</h2> {beer.description}
        </div>
        <div className="tips">
          <h2>Brewers Tips: </h2>
          {beer.brewers_tips}
        </div>
      </div>

      <button className="btn" onClick={onBackClick}>
        Back to all beers
      </button>
    </div>
  );
};

export default BeerDetails;
