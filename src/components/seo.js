import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  description, lang, meta, title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0',
        },
      ].concat(meta)}
    />
  );
};

SEO.propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(shape()),
  title: string,
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  title: '',
};

export default SEO;
