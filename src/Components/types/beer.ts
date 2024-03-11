export type BeerProps = {
    id: number;
    name: string;
    tagline: string;
    description: string;
    abv: number;
    image_url: string;
    ingredients: {
      malt: [
        {
          name: string;
          amount: {
            value: number;
            unit: string;
          };
        }
      ];
    };
    food_pairing: string[];
    brewers_tips: string;
  }[];

export type BeerDetailsProps = {
    beer: {
      id: number;
      name: string;
      tagline: string;
      description: string;
      abv: number;
      image_url: string;
      ingredients: {
        malt: [
          {
            name: string;
            amount: {
              value: number;
              unit: string;
            };
          }
        ];
      };
      food_pairing: string[];
      brewers_tips: string;
    };
    onBackClick: () => void; 
  };