import React, { useState, useEffect } from 'react';
import {
  arrayOf, func, shape, string, bool,
} from 'prop-types';
import { Select } from 'antd';
import { isEmpty } from 'lodash';
import { camelize } from 'humps';
import Icon from '../Icon';

const { Option } = Select;

const setFilterValueFromProps = (filters, category, setFilterValue) => {
  Object.entries(filters).forEach((filter) => {
    if (filter[0] === category.toLowerCase()) {
      setFilterValue(filter[1]);
    }
  });
};

const FilterCategory = ({
  onChange, isFilterEmpty, filterCategories, types, category, setEmptySelectedFilter,
}) => {
  const [filterValue, setFilterValue] = useState(null);
  const [isEmptyFilter, setIsEmptyFilter] = useState(true);
  const clearStateClassName = isEmptyFilter ? 'clear-select' : '';

  const handleClear = () => {
    setEmptySelectedFilter(category, filterValue);
  };

  const handleSelectChange = (value) => {
    if (value) {
      onChange({
        type: camelize(category),
        value: camelize(value),
      });
      setFilterValue(value);
      setIsEmptyFilter(false);
    } else {
      setIsEmptyFilter(true);
    }
  };

  useEffect(() => {
    if (isFilterEmpty) {
      setFilterValue(category);
    }
  }, [isFilterEmpty]);

  useEffect(() => {
    if (!isEmpty(filterCategories)) {
      setFilterValueFromProps(filterCategories, category, setFilterValue);
    } else {
      setFilterValue(category);
    }
  }, [filterCategories]);

  return (
    <div className="filter-category">
      <Select
        suffixIcon={<Icon name="angleBottom" width="14" height="14" />}
        dropdownClassName="ds-select-dropdown default-box-shadow"
        className={`ds-select text-primary ${clearStateClassName}`}
        bordered={false}
        onChange={handleSelectChange}
        onClear={handleClear}
        placeholder={category}
        value={filterValue}
        clearIcon={<Icon name="cross" width="14" height="14" />}
        allowClear={!isEmptyFilter}
      >
        {types.map((type) => (
          <Option
            key={type.id}
            value={type.value}
          >
            {type.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

FilterCategory.propTypes = {
  types: arrayOf(shape()),
  category: string,
  onChange: func,
  setEmptySelectedFilter: func,
  isFilterEmpty: bool,
  filterCategories: shape(),
};

FilterCategory.defaultProps = {
  types: {},
  category: '',
  filterCategories: {},
  onChange: null,
  setEmptySelectedFilter: null,
  isFilterEmpty: true,
};

export default FilterCategory;
