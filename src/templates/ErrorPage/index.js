import React from 'react';
import { graphql } from 'gatsby';
import { shape } from 'prop-types';
import { camelizeKeys } from 'humps';
import ErrorPageSchema from '../../components/sections/ErrorPageSchema';
import Layout from '../../components/Layout';

const ErrorPage = ({ data }) => {
  const articleData = camelizeKeys(data.strapi.errorPage);
  return (
    <Layout
      hideFooter
      headerActive
    >
      <ErrorPageSchema data={articleData.content} />
    </Layout>
  );
};

export default ErrorPage;

ErrorPage.propTypes = {
  data: shape().isRequired,
};

export const query = graphql`
  query GET_ERROR_PAGE ($id: ID!) {
    strapi {
      errorPage (id:$id) {
        content {
          status
          title
          description
          isFormExist
          formTitle
        }
      }
    }
  }
 `;
