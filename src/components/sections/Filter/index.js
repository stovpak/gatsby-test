/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { isEmpty, groupBy } from 'lodash';
import FilterCategory from '../../elements/FilterCategory';
import Img from '../../elements/Image';
import Story from '../Story';
import Container from '../../DynamicComponents/Container';
import { useStoryQuery } from '../Story/query';
import { useStoryTypesQuery } from './query';

const Filter = ({ data }) => {
  const storyData = useStoryQuery();
  const allStories = storyData.strapi.stories;

  const storyTypesData = useStoryTypesQuery();
  const { storyTypes } = storyTypesData.strapi;
  const grouped = groupBy(storyTypes, (storyTypes) => storyTypes.type);

  const [filterCategories, setFilterCategories] = useState({});
  const [stories, setStories] = useState([]);
  const [isFiltersEmpty, setIsFiltersEmpty] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const isFadeIn = fadeIn ? 'fadeIn' : '';
  const updateUrl = (params) => {
    const queryString = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
    const newUrl = `${window.location.pathname}?${queryString}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const parseQueryParams = () => {
    const params = location.search.substring(1);
    return Object.fromEntries(new URLSearchParams(params));
  };

  const handleFiltersChange = (category) => {
    const { type, value } = category;

    setIsFiltersEmpty(false);
    setStories(allStories);

    const newFilter = {
      ...filterCategories,
      [type]: value,
    };

    updateUrl(newFilter);
    setFilterCategories(newFilter);
  };

  const showFadeIn = () => {
    setFadeIn(true);

    setTimeout(() => {
      setFadeIn(false);
    }, 1500);
  };

  const handleFiltersClear = () => {
    setIsFiltersEmpty(true);
    setFilterCategories([]);
    setStories(allStories);
    showFadeIn();
    updateUrl('');
  };

  useEffect(() => {
    setFilterCategories(parseQueryParams());
    setStories(allStories);
  }, []);

  useEffect(() => {
    setStories(allStories);

    if (!isEmpty(filterCategories)) {
      const filteredStories = stories.filter(
        (story) => Object.keys(filterCategories).every(
          (filter) => {
            let isFiltered = false;
            story.types.forEach((type) => {
              if (type.data.type === filter && type.data.value === filterCategories[filter]) {
                isFiltered = true;
              }
            });
            return isFiltered;
          },
        ),
      );

      setStories(filteredStories);
      showFadeIn();
    }
  }, [filterCategories]);

  const setEmptySelectedFilter = (category, filterName) => {
    history.replaceState && history.replaceState(
      null, '', location.pathname + location.search.replace(new RegExp(`${category}=${filterName}`), '').replace(/^&/, '?'),
    );

    const newCategories = {
      ...filterCategories,
    };

    delete newCategories[category];

    if (isEmpty(newCategories)) {
      handleFiltersClear();
    } else {
      setStories(allStories);
      setFilterCategories(newCategories);
    }
  };

  return (
    <section className="stories">
      <Container>
        <div className="row">
          <Img
            src={data.image.url}
            minHeight="50"
            minWidth="50"
            className="position-absolute top-30"
          />

          <div
            role="button"
            tabIndex={0}
            className="text-bold text-primary pointer position-absolute right-0 top-0"
            onKeyDown={handleFiltersClear}
            onClick={handleFiltersClear}
          >
            Clear all
          </div>

          <div className="stories-filters full-width mt-30">
            <div className="row">
              {Object.keys(grouped).map((category) => (
                <div className="col-xs-12 col-sm-3" key={category.id}>
                  <FilterCategory
                    category={category}
                    types={grouped[category]}
                    onChange={handleFiltersChange}
                    isFilterEmpty={isFiltersEmpty}
                    setEmptySelectedFilter={setEmptySelectedFilter}
                    filterCategories={filterCategories}
                  />
                </div>
              ))}
            </div>
          </div>

          <Story
            stories={stories}
            wrapperClassname={isFadeIn}
          />
        </div>
      </Container>
    </section>
  );
};

Filter.propTypes = {
  data: shape({
    image: shape({
      url: string,
    }),
    categories: arrayOf(shape()),
  }),
};

Filter.defaultProps = {
  data: {},
};

export default Filter;
