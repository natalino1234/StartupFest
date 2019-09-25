import { ApolloClient, gql, InMemoryCache, HttpLink } from "apollo-boost";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://startups-project-mytvsxrgeb.now.sh'
});

const client = new ApolloClient({cache, link});

export const GET_STARTUPS = gql`
{
  allStartups(page:0,perPage:20){
    name
    imageUrl
    segment_id
    teamCount
    annualReceipt
    description
    Segment{
      id
      code
      name
    }
  }
}
`;

export const ExecutarQuery = function (query, callback) {
    client.query({
        query: query
    }).then(callback);
}