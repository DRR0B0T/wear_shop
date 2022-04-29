import {gql} from '@apollo/client'

export const GET_ALL_CURRENCY = gql`
       query {
       currencies {
                label, symbol
                  }
                  }
    `

export const GET_ALL_CARDS = gql`
    query  {
    categories {
        products {
                    id,
                    name,
                    gallery,
                    inStock,
                    prices {
                            amount
                            }
                  }
                }
            }
`

