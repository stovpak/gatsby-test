import { useStaticQuery, graphql } from 'gatsby';

export const useCareerQuery = () => {
  const careerQuery = useStaticQuery(graphql`
    query GET_VACANCIES_CONTENT {
      strapi {
        vacancies {
          id
          slug
          shortDescription
          content {
            title
          }
        }
      }
    }
 `);
  return careerQuery;
};

export default {
  useCareerQuery,
};
