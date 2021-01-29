const path = require('path');
const { camelizeKeys } = require('humps');

const {
  allStrapiPagesQuery,
  allStrapiStoriesQuery,
  allStrapiVacanciesQuery,
  allStrapiArticlesQuery,
  allStrapiErrorPagesQuery,
} = require('./src/utils/queries');

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      return result;
    }),
  );
});

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const allStrapiPages = await makeRequest(graphql, allStrapiPagesQuery);
  const allStrapiPagesResponse = allStrapiPages.data.strapi.pages
    ? camelizeKeys(allStrapiPages.data.strapi.pages)
    : [];

  allStrapiPagesResponse.forEach((page) => {
    createPage({
      path: `${page.slug}`,
      component: path.resolve('src/templates/Page/index.js'),
      context: {
        id: page.id,
      },
    });
  });

  const allStrapiStories = await makeRequest(graphql, allStrapiStoriesQuery);
  const allStrapiStoriesResponse = allStrapiStories.data.strapi.stories
    ? camelizeKeys(allStrapiStories.data.strapi.stories)
    : [];

  allStrapiStoriesResponse.forEach((story) => {
    createPage({
      path: `${story.slug}`,
      component: path.resolve('src/templates/Story/index.js'),
      context: {
        id: story.id,
      },
    });
  });

  const allStrapiVacancies = await makeRequest(graphql, allStrapiVacanciesQuery);
  const allStrapiVacanciesResponse = allStrapiVacancies.data.strapi.vacancies
    ? camelizeKeys(allStrapiVacancies.data.strapi.vacancies)
    : [];

  allStrapiVacanciesResponse.forEach((vacancy) => {
    createPage({
      path: `${vacancy.slug}`,
      component: path.resolve('src/templates/Vacancy/index.js'),
      context: {
        id: vacancy.id,
      },
    });
  });

  const allStrapiArticles = await makeRequest(graphql, allStrapiArticlesQuery);
  const allStrapiArticlesResponse = allStrapiArticles.data.strapi.articles
    ? camelizeKeys(allStrapiArticles.data.strapi.articles)
    : [];

  allStrapiArticlesResponse.forEach((article) => {
    createPage({
      path: `${article.slug}`,
      component: path.resolve('src/templates/Article/index.js'),
      context: {
        id: article.id,
      },
    });
  });

  const allStrapiErrorPages = await makeRequest(graphql, allStrapiErrorPagesQuery);
  const allStrapiErrorPagesResponse = allStrapiErrorPages.data.strapi.errorPages
    ? camelizeKeys(allStrapiErrorPages.data.strapi.errorPages)
    : [];

  allStrapiErrorPagesResponse.forEach((page) => {
    createPage({
      path: `${page.slug}`,
      component: path.resolve('src/templates/ErrorPage/index.js'),
      context: {
        id: page.id,
      },
    });
  });

  return Promise.all([
    allStrapiPages,
    allStrapiStories,
    allStrapiVacancies,
    allStrapiArticles,
    allStrapiErrorPages,
  ]);
};
