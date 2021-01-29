require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: 'Digital Suits',
    description: 'Digital Suits',
    author: 'Digital Suits',
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          staging: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    }, {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        serialize: ({ site, allSitePage }) => allSitePage.nodes.map((edge) => ({
          url: `${site.siteMetadata.siteUrl}${edge.path}`,
        })),
      },
    }, {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'STRAPI',
        fieldName: 'strapi',
        url: `${process.env.GATSBY_API_PATH}/graphql`,
        batch: true,
        dataLoaderOptions: {
          maxBatchSize: 10,
        },
      },
    }, {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    }, {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
      },
    }, {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_API_PATH,
        contentTypes: [
          'page',
          'story',
          'vacancy',
          'article',
          'error-page',
          'form-messages',
        ],
        queryLimit: 1000,
      },
    }, {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }, {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    }, {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: process.env.GATSBY_API_PATH,
      },
    }, {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
      },
    },
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
  ],
};
