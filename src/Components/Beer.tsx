import  { useEffect, useState } from "react";
import Button from "./Button";
import BeerDetails from "./BeerDetails";
import { BeerProps } from "./types/beer";

const url = "https://api.punkapi.com/v2/beers";

const Beer = () => {
  const [beerName, setBeerName] = useState<BeerProps>([]);
  const [details, setDetails] = useState<BeerProps[number] | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBeerName(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDetails = (beer: BeerProps[number]) => {
    setDetails(beer);

  };

  const handleBackClick = () => {
    setDetails(null)
   
  }

  const getRandomColor = () => {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ccffff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
        {details ? (
            <BeerDetails beer={details} onBackClick={handleBackClick} />
        ) : (
      <ul className="beer">
        {beerName.map((beer, index) => (
          <li
            key={index}
            className="beer-container"
            style={{ backgroundColor: getRandomColor() }}
          >
           <Button className="name" name={beer.name} onClick={() => handleDetails(beer)} /> 
            <img src={beer.image_url} alt="bild" />
            <p>alc {beer.abv} %</p>
          </li>
        ))}
      </ul>
    
      )}
    </div>
  );
};

export default Beer;

