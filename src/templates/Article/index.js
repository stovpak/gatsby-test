import React from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';
import { camelizeKeys } from 'humps';
import { isEmpty } from 'lodash';

import DynamicZone from '../../components/DynamicZone';
import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import RichTextWithHero from '../../components/sections/RichTextWithHero';
import { useArticleSocialLinksQuery } from './query';

const ArticleTemplate = ({ data }) => {
  const articleData = camelizeKeys(data.strapi.article);
  const socialLinksData = useArticleSocialLinksQuery();
  const { socialLinks } = socialLinksData.strapi;
  const seo = articleData && !isEmpty(articleData.seo)
    ? articleData.seo
    : {};
  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
      />
      <RichTextWithHero data={articleData.content} />
      <DynamicZone content={socialLinks} components={articleData.additionalContent} />
    </Layout>
  );
};

export default ArticleTemplate;

ArticleTemplate.propTypes = {
  data: shape().isRequired,
};

export const query = graphql`
  query GET_ARTICLE ($id: ID!) {
    strapi {
      article (id:$id) {
        seo {
          title
          description
          keywords
        }
        content {
          id
          gradient {
            color
            side
            position
          }
          title
          image {
            url
          }
          content
        }
        additionalContent {
          ... on STRAPI_ComponentSectionsChatbot {
            id
            chatbotText {
              text
            }
          }
          ... on STRAPI_ComponentSectionsSubscribe {
            title
          } 
          ... on STRAPI_ComponentSectionsRelatedArticles {
            id
            title
            articles {
              article {
                id
                shortDescription
                slug
                content {
                  title
                }
              }
            }
          }
          ... on STRAPI_ComponentSectionsAuthor {
            author {
              title
              label
              description
              image {
                url
              }
            }
          }
          ... on STRAPI_ComponentElementsText {
            id
            text
          }
        }
      }
    }
  }
 `;
