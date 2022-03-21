import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getServices = async () => {
  const query = gql`
    query MyQuery {
      servicesConnection {
        edges {
          node {
            title
            description
            slug
            icon {
              url
            }
            content {
              raw
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query);

  return result.servicesConnection.edges;
}

export const getServiceDetails = async (slug) => {
  const query = gql`
    query getServiceDetails($slug: String!) {
      service(where: { slug: $slug }) {
        title
        description
        slug
        content {
          raw
        }
        featuredImage {
          caption
          url
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug });

  return result.service;
}


