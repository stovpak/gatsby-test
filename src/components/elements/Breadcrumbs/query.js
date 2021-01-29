import { useStaticQuery, graphql } from 'gatsby';

export const useBreadcrumbsQuery = () => {
  const breadcrumbsQuery = useStaticQuery(graphql`
    query GET_PAGES {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  return breadcrumbsQuery;
};

export default {
  useBreadcrumbsQuery,
};
