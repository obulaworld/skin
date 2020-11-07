import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  query GetProducts($currency: Currency) {
    products {
      id
      image_url
      price(currency: $currency)
      product_options {
        title
        options {
          value
        }
        prefix
        suffix
      }
      title
    }
  }
`;

export const CURRENCY = gql`
  query GetCurrency {
    currency
  }
`;
