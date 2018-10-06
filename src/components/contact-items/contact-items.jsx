import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '..';


class ContactItems extends Component {
  render() {
    if (this.props.loading) {
      return <div><p>LOADING</p></div>;
    }

    return (
      <div className="contact-items content-wrapper">
        {this.props.contacts.map((details) => <ContactItem details={details} key={details.id} />)}
      </div>
    );
  }
}

ContactItems.propTypes = {
  contacts: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default ContactItems;
