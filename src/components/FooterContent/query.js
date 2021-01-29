import { useStaticQuery, graphql } from 'gatsby';

export const useFooterQuery = () => {
  const footerQuery = useStaticQuery(graphql`
    query GET_FOOTER {
      strapi {
        footer {
          data {
            ... on STRAPI_ComponentElementsText {
              text
            }
            ... on STRAPI_ComponentElementsMediaBlock {
              id
              scrollId
              image {
                url
              }
              description
            }
            ... on STRAPI_ComponentSectionsNavigation {
              id
              navigationBlock {
                id
                links {
                  id
                  text
                  url
                  type
                  pageSlug {
                    page {
                      slug
                   }
                  }
                }
                socialLinks {
                  links {
                    id
                    socialLink {
                      name
                      url
                    }
                  } 
                }
              }
            }
          }
        } 
      }
    }
`);
  return footerQuery;
};

export default {
  useFooterQuery,
};
