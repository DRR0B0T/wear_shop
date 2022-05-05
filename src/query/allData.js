import {gql} from '@apollo/client'

export const GET_ALL_CURRENCY = gql`
       query {
       currencies {
                label, symbol
                }
       }
`

export const GET_CURRENT_CURRENCY = gql `
        query  {
            categories{
                products {
                    prices  {
                            amount,
                                currency  {
                                  label, symbol
                                          }
                            }
                }
            }    
        }
`


export const GET_ALL_DATA = gql`
    query  {
        categories  {
                    name, products {
                        id,
                        name,
                        inStock,
                        gallery,
                        description,
                        category,
                        attributes { 
                                    id,
                                    name,
                                    type,
                                    items {
                                          id,
                                          value,
                                          displayValue
                                          }
                                    },
                        prices {
                                amount,
                                currency {
                                label, symbol
                                }
                                },
                        brand,
                    }
        }
    }
`

