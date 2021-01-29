import { useStaticQuery, graphql } from 'gatsby';

export const useArticleSocialLinksQuery = () => {
  const articleSocialLinksQuery = useStaticQuery(graphql`
    query GET_SOCIAL_LINKS_CONTENT {
      strapi {
        socialLinks {
          id
          name
          url
        }
      }
    }
 `);
  return articleSocialLinksQuery;
};

export default {
  useArticleSocialLinksQuery,
};
