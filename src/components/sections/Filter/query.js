import { useStaticQuery, graphql } from 'gatsby';

export const useStoryTypesQuery = () => {
  const StoryTypesQuery = useStaticQuery(graphql`
    query GET_STORY_TYPES_CONTENT {
      strapi {
        storyTypes {
        id
        label
        type
        value
      }
    }
  }
`);

  return StoryTypesQuery;
};

export default {
  useStoryTypesQuery,
};
