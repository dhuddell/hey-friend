import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ContactItem extends Component {
  render() {
    const { name, icon, id, activity } = this.props.details;

    const percentClass = () => {
      switch (activity) {
      case 0:
        return 'zero';
      case 25:
        return 'twenty-five';
      case 50:
        return 'fifty';
      case 75:
        return 'seventy-five';
      case 100:
        return 'one-hundred';
      default:
        return 'one-hundred';
      }
    };

    return (
      <Link to={`/contacts/${id}`} className="contact-wrapper">
        <div className="contact-item">
          <p className="contact-name">{name}</p>
          <div className="icon-container">
            <div className="icon-outer-circle">
              <div className={`inner-icon-container ${percentClass()}`}>
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
