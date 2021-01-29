import React from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';
import { camelizeKeys } from 'humps';
import { isEmpty } from 'lodash';

import DynamicZone from '../../components/DynamicZone';
import Seo from '../../components/seo';
import Layout from '../../components/Layout';
import RichTextWithHero from '../../components/sections/RichTextWithHero';

const VacancyTemplate = ({ data }) => {
  const vacancyData = camelizeKeys(data.strapi.vacancy);
  const seo = vacancyData && !isEmpty(vacancyData.seo)
    ? vacancyData.seo
    : {};
  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
      />
      <RichTextWithHero data={vacancyData.content} />
      <DynamicZone components={vacancyData.additionalContent} />
    </Layout>
  );
};

export default VacancyTemplate;

VacancyTemplate.propTypes = {
  data: shape().isRequired,
};

export const query = graphql`
 query GET_VACANCY ($id: ID!) {
  strapi {
    vacancy (id:$id) {
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
        ... on STRAPI_ComponentSectionsRecruiterSection {
          id
          recruiter {
            title
            label
            description
            image {
              url
            }
          }
        }
      }
    }
  }
 }
 `;
