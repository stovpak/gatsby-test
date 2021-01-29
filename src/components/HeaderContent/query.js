import { useStaticQuery, graphql } from 'gatsby';

export const useHeaderQuery = () => {
  const headerQuery = useStaticQuery(graphql`
    query GET_HEADER {
      strapi {
        header {
          data {
            ... on STRAPI_ComponentSectionsHeaderContent {
              id
              primaryLogo { 
                url
              }
              secondaryLogo {
                url
              }
              contactUs {
                text
                type
                url
                pageSlug {
                  page {
                    slug
                  }
                }
              }
              content {
                id
                link
                pageSlug {
                 page {
                   slug
                  }
                }
                sublinksBlock {
                  id
                  label 
                  sublinks {
                    id
                    url
                    text
                    type
                    pageSlug {
                      page {
                       slug
                    }
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
  return headerQuery;
};

export default {
  useHeaderQuery,
};
