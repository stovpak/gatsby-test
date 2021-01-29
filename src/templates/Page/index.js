import React from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';
import { camelizeKeys } from 'humps';
import { isEmpty } from 'lodash';

import DynamicZone from '../../components/DynamicZone';
import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/elements/Breadcrumbs';

const PageTemplate = ({ data }) => {
  const pageData = camelizeKeys(data.strapi.page);
  const pageSlug = data.strapi.page.slug;
  const seo = pageData && !isEmpty(pageData.seo)
    ? pageData.seo
    : {};
  const pages = pageSlug.split('/').filter(Boolean);

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
      />

      {(pageSlug !== '/') && (
        <Breadcrumbs pages={pages} />
      )}

      <DynamicZone components={pageData.content} />
    </Layout>
  );
};

export default PageTemplate;

PageTemplate.propTypes = {
  data: shape().isRequired,
};

export const query = graphql`
  query GET_PAGE ($id: ID!) {
    strapi {
      page (id:$id) {
        seo {
          title
          description
          keywords
        }
        slug
        label
        content {
          ... on STRAPI_ComponentSectionsChatbot {
            id
            chatbotText {
              text
            }
          }
          ... on STRAPI_ComponentSectionsWeAreDrivenBy {
            id
            title
            scrollId
            cards {
              label
              image {
                url
              }
            }
          }
          ... on STRAPI_ComponentSectionsWidgetCode {
            id
            code
          }
          ... on STRAPI_ComponentElementsRichText {
            id
            text
          }
          ... on STRAPI_ComponentSectionsContactUsPageScheme {
            id
            title
            mobileLocations {
              data {
                id
                name
                location
              }
            }
            image {
              url
            }
          }
          ... on STRAPI_ComponentSectionsBlogArticles {
            id
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
          ... on STRAPI_ComponentSectionsSitemapSection {
            title
            id
            sitemapComponents {
              id
              label
              sitemapRelations {
                id
                page {
                  label
                  slug
                }
                article {
                  content {
                    title
                  }
                  slug
                }
              }
            }
          }
          ... on STRAPI_ComponentSectionsArticleSection {
            id
            title
            imagePosition
            gradient {
              color
              side
              position
            }
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
          ... on STRAPI_ComponentSectionsUkrainianDevelopmentAdvantages {
            mobileImage {
              url
            }
            mediaBlock {
              title
              description
              image {
                url
              }
              scrollId
            }
            textBlock {
              title
              id
              texts {
                id
                text
              }
            }
          }
          ... on STRAPI_ComponentSectionsOpeningSection {
            id
            title
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
          ... on STRAPI_ComponentSectionsInformationTextSection {
            id
            title
            button {
              type
              text
            }
            information {
              id
              label
              description
              button {
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
          ... on STRAPI_ComponentSectionsWeGuarantee {
            id
            scrollId
            title
            guarantees {
              id
              title
              description
              image {
                url
              }
            }
          }
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
              pageSlug {
                page {
                  slug
                }
              }
            }
            technologies {
              id
              description
              image {
                url
              }
            }
          }
          ... on STRAPI_ComponentSectionsFilterContent {
            id
           
          }
          ... on STRAPI_ComponentSectionsFilter {
            id
            image {
              url
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
          ... on STRAPI_ComponentSectionsTextsBlock {
            id
            title
            texts {
              id
              text
            }
          }
          ... on STRAPI_ComponentSectionsTextContentWithMedia { 
            id
            scrollId
            content {
              title
              description
            }
            images {
              primaryImage {
                url
              }
              secondaryImage {
                url
              }
            }
          }
          ... on STRAPI_ComponentSectionsClientExperienceHeroBlock {
            id
            title
            slides {
              id
              label
              role
              description
              mediaType
              media {
                url
              }
            }
          }
          ... on STRAPI_ComponentSectionsHomepageHero {
            id
            slides {
              id
              label
              description
              image {
                url
              }
              buttons {
                type
                id
                text
                pageSlug {
                page {
                  slug
                }
              }
              }
            }
          }
          ... on STRAPI_ComponentSectionsWhoWeAre {
            id
            title
            label
            description
            media {
              url
            }
          }
          ... on STRAPI_ComponentSectionsInformationBlock {
            id
            gradient {
              color
              side
              position
            }
            scrollId
            title
            description
            informationCards {
              id
              label
              description
              image {
                url
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
          }
          ...on STRAPI_ComponentSectionsImageVariationsBlock {
            id
            scrollId
            title
            gradient {
              color
              side
              position
            }
            imagesVariations {
              id
              url
              primaryImage { 
                url
              }
              secondaryImage {  
                url
              }
            }
          }
          ... on STRAPI_ComponentSectionsStoriesSlider {
            id
            title
            stories {
              data {
                id
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
              text
              type
              pageSlug {
                page {
                  slug
                }
              }
            }
          }
          ... on STRAPI_ComponentSectionsCooperationProcess {
            id
            scrollId
            title
            gradient {
              color
              side
              position
            }
            image {
                  url
            }
            steps {
              step {
                id
                label
                description
              }
            }
          }
          ... on STRAPI_ComponentSectionsHeroContent {
            id
            title
            image {
              url
            }
            links {
              id
              type
              text
              scrollToId
            }
          }
          ... on STRAPI_ComponentElementsTextContent {
            id
            scrollId
            title
            description
          }
          ... on STRAPI_ComponentElementsMediaBlock {
            id
            scrollId
            title
            description
            image {
              url
            }
          }
        }
      }
    }
  }
`;
