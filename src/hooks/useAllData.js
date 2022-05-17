import {gql, useQuery} from '@apollo/client'

const GET_ALL_DATA = gql `
    query  {
        categories  {
            name
            products {
                id
                name
                inStock
                gallery
                description
                category
                attributes {
                    id
                    name
                    type
                    items {
                        id
                        value
                        displayValue
                    }
                }
                prices {
                    amount
                    currency {
                        label symbol
                    }
                }
                brand
            }
        }
    }
`

export const useAllData = () => {
  const {data, loading, error} = useQuery(GET_ALL_DATA)


  return {
    data,
    loading,
    error
  }
}