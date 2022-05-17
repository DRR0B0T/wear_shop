import {gql, useQuery} from '@apollo/client'

const GET_PRICES = gql `
    query {
        categories {
            name
            products {
                id
                prices {
                    currency {
                        symbol
                        label
                    }
                    amount
                }
            }
        }
    }
`

export const usePrices = () => {
  const {data, loading, error} = useQuery(GET_PRICES)


  return {data, loading, error}
}
