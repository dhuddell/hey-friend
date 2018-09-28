import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ContactItem extends Component {
  render() {
    const { name, icon, id, activity } = this.props.details;

    const percentClass = () => {
      if(activity === 0) return 'zero';
      if(activity === 25) return 'twenty-five';
      if(activity === 50) return 'fifty';
      if(activity === 75) return 'seventy-five';
      if(activity === 100) return 'one-hundred';
      return 'seventy-five';
    }

    return (
      <Link to={`/contacts/${id}`} className="contact-wrapper">
        <div className='contact-item'>
          <p className='contact-name'>{name}</p>
          <div className='icon-container'>
            <div className='icon-outer-circle'>
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
