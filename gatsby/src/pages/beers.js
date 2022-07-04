import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center; 
    font-size: 10px; 
    color: var(--black);

  }
`;

export default function BeersPage({ data }) {
  return (
    <div>
      <h2>
        We have {data.beers.nodes.length} Beers Available. Dine in
        Only!
      </h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => (
          <SingleBeerStyles key={beer.id}>
            <img src={beer.image} alt="beer.name" />
            <h3>{beer.name}</h3>
            {beer.price}
            <p
              title={`${Math.ceil(
                beer.rating.average
              )} out of 5 stars`}
            >
              {`⭐️`.repeat(beer.rating.average)}
              <span style={{ filter: `grayscale(100%)` }}>
                {`⭐️`.repeat(5 - beer.rating.average)}
              </span>
            </p>
          </SingleBeerStyles>
        ))}
      </BeerGridStyles>
    </div>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        image
        price
        rating {
          average
          reviews
        }
      }
    }
  }
`;
