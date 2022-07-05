import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm'; 
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyle';

export default function OrderPage({ data }) {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });

  const pizzas = data.pizzas.nodes;

  return (
    <OrderStyles>
      <SEO title="Order a Pizza!" />
      <form>
        <fieldset>
          <legend>Your info</legend>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={updateValue}
          />
        </fieldset>
        <fieldset className='menu'>
          <legend>Menu</legend>
          {pizzas.map((pizza) => (
            <div>
              <div>
                <Img
                  fluid={pizza.image.asset.fluid}
                  width="50"
                  height="50"
                  alt={pizza.name}
                />
                <h2>{pizza.name}</h2>
              </div>
              {['S', 'M', 'L'].map((size) => (
                <button type="button">
                  {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                </button>
              ))}
            </div>
          ))}
        </fieldset>
        <fieldset className="order">
          <legend>Order</legend>
        </fieldset>
      </form>
    </OrderStyles>
  );
}

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
