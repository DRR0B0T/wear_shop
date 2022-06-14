import { gql } from '@apollo/client'

// noinspection GraphQLUnresolvedReference
export const GET_ALL_DATA = gql`
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
                brand
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
            }
        }
    }
`
// noinspection GraphQLUnresolvedReference
export const GET_ALL_CURRENCY = gql`
    query {
        currencies {
            label, symbol
        }
    }
`
// noinspection GraphQLUnresolvedReference
export const GET_PRODUCT = gql`
    query Product($id: String!){
        product (id: $id) {
            id
            name
            brand
            gallery
            description
            inStock
            prices{
                amount
                currency {
                    label
                    symbol
                }
            }
            attributes {
                id
                name
                items {
                    id
                    value
                }
            }
        }
    }
`
// noinspection GraphQLUnresolvedReference
export const GET_CATEGORY = gql`
    query Category($input: CategoryInput){
        category(input: $input) {
            name
            products {
                id
            }
        }
    }
`
