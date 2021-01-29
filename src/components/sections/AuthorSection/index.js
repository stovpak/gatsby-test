import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import PersonData from '../../elements/PersonData';

const AuthorSection = ({ content, data }) => (
  <div className="author-section">
    <PersonData data={data.author} />
    {content && content.map((link) => (
      <div key={link.id}>
        <p>{link.name}</p>
        <p>{link.url}</p>
      </div>
    ))}
  </div>
);

AuthorSection.propTypes = {
  data: shape({
    author: shape(),
  }),
  content: arrayOf(shape({
    name: string,
    url: string,
  })),
};

AuthorSection.defaultProps = {
  data: {
    author: {},
  },
  content: [
    {
      id: '',
      name: '',
      url: '',
    },
  ],
};

export default AuthorSection;
