import {gql} from '@apollo/client'

export const GET_ALL_CURRENCY = gql`
       query {
       currencies {
                label, symbol
                }
       }
`