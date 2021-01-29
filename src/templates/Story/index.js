import React from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';
import { camelizeKeys } from 'humps';
import { isEmpty } from 'lodash';

import DynamicZone from '../../components/DynamicZone';
import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import ArticleSection from '../../components/sections/ArticleSection';

const StoryTemplate = ({ data }) => {
  const storyData = camelizeKeys(data.strapi.story);
  const seo = storyData && !isEmpty(storyData.seo)
    ? storyData.seo
    : {};

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
      />

      <ArticleSection
        data={storyData.hero}
        imageWrapperWidth="half"
      />
      <DynamicZone
        components={storyData.content}
        imageWrapperWidth="half"
      />
    </Layout>
  );
};

export default StoryTemplate;

StoryTemplate.propTypes = {
  data: shape().isRequired,
};

export const query = graphql`
 query GET_STORY ($id: ID!) {
 strapi {
    story (id:$id) {
      id
      seo {
        title
        description
        keywords
      }
      types {
        data {
          type
          label
          color
        }
      }
      hero {
        id
        title
          articleContent {
            id
            title
            description
          }
          image {
            url
          }
      }
      content {
        ...on STRAPI_ComponentSectionsMainTechnologies {
          id
          gradient {
              color
              side
              position
            }
          scrollId
          title
          button {
            type
            text
          }
          technologies {
            id
            description
            image {
              url
            }
          }
        }
        ... on STRAPI_ComponentSectionsArticleSection {
          id
          title
          gradient {
              color
              side
              position
            }
          imagePosition
          articleContent {
            id
            scrollId
            title
            description
          }
          image {
            url
          }
        }
        ... on STRAPI_ComponentSectionsStoriesSlider {
          id
          title
          stories {
            data {
              slug
              types {
                data {
                  type
                  label
                  color
                }
              }
              storySlideLabel
              storySlideDescription
            }
          }
          button {
            type
            text
            pageSlug {
              page {
                slug
              }
            }
          }
        }
        ... on STRAPI_ComponentSectionsChatbot {
          id
          chatbotText {
            text
          }
        }
      }
    }
  }
}
 `;
