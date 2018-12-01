import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '..';


const ContactItems = ({ friends }) => (
  <div className="contact-items content-wrapper">
    {friends.map((details) => <ContactItem details={details} key={details.id} />)}
  </div>
);

ContactItems.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default ContactItems;
