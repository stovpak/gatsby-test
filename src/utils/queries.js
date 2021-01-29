exports.allStrapiPagesQuery = `
  {
    strapi {
      pages {
        id
        slug
      }
    }
  }
`;

exports.allStrapiStoriesQuery = `
  {
    strapi {
      stories {
        id
        slug
      }
    }
  }
`;

exports.allStrapiVacanciesQuery = `
  {
    strapi {
      vacancies {
        id
        slug
      }
    }
  }
`;

exports.allStrapiArticlesQuery = `
  {
    strapi {
      articles {
        id
        slug
      }
    }
  }
`;

exports.allStrapiErrorPagesQuery = `
  {
    strapi {
      errorPages {
        id
        slug
      }
    }
  }
`;
