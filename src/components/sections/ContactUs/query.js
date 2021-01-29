import { useStaticQuery, graphql } from 'gatsby';

export const useFormMessagesQuery = () => {
  const formMessagesQuery = useStaticQuery(graphql`
    query GET_FormMessages_CONTENT {
      strapi {
        formMessages {
          type
          message
        }
      }
    }
  `);

  return formMessagesQuery;
};

export default {
  useFormMessagesQuery,
};
