import React from 'react';
import { shape } from 'prop-types';
import PersonData from '../../elements/PersonData';
import ContactUsForm from '../ContactUs';

const RecruiterSection = ({ data }) => (
  <div className="recruiterSection">
    <PersonData data={data.recruiter} />
    <ContactUsForm data={{ messageLabel: 'Linkedn profile', type: 'recruiting' }} />
  </div>
);

RecruiterSection.propTypes = {
  data: shape(),
};

RecruiterSection.defaultProps = {
  data: {},
};

export default RecruiterSection;
