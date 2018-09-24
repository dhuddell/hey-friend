import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ContactItem extends Component {
  render() {
    const { name, icon, id } = this.props.details;

    return (
      <Link to={`/contacts/${id}`} className="contact-wrapper">
        <div className='contact-item'>
          <p className='contact-name'>{name}</p>
          <div className='icon-container'>
            <i className={`fa ${icon} contact-icon`} />
          </div>
        </div>
      </Link>
    );
  }
}

ContactItem.propTypes = {
  details: PropTypes.object,
};

export default ContactItem;
