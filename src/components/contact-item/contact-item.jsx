import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import percentMapper from '../../helpers/percent-mapper';

class ContactItem extends Component {
  render() {
    console.log(this.props.details);
    const { name, icon, id, friendScore } = this.props.details;

    return (
      <Link to={`/contacts/${id}`} className="contact-wrapper">
        <div className="contact-item">
          <p className="contact-name">{name}</p>
          <div className="icon-container">
            <div className="icon-outer-circle">
              <div className={`inner-icon-container ${percentMapper(friendScore)}`}>
                <i className={`fa ${icon} contact-icon inner-contact-icon`} />
              </div>
            </div>
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
