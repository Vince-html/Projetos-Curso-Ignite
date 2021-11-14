import {gql} from 'graphql-request';

export const GET_CONTINENTS = gql`
query getContinentsBySlug($slug: String){
 continents(where: {slug:$slug}) {  
  continentes
  slug
 }
}
`