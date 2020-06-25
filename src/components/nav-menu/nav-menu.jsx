import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBanner: false,
    };
  }

  arrowStyle = {
    position: 'relative',
    bottom: '0',
    right: '0',
    display: 'inline',
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
  }

  render() {
    return (
      <div className="nav-menu" >
        <Link className="nav-menu-link" to="/">
          <span className="fa fa-users" />
        </Link>
        <Link className="nav-menu-link" to="/">
          <span className="fa fa-user-plus" />
        </Link>
        <span className="nav-menu-link" >
          <ScrollToTop style={this.arrowStyle} showUnder={160}>
            <span className="fa fa-chevron-circle-up" />
          </ScrollToTop>
        </span>
        <Link className="nav-menu-link" to="/">
          <span className="fas fa-bacon" />
        </Link>
        <Link className="nav-menu-link" to="/settings">
          <span className="fa fa-cog" />
        </Link>
      </div>
    );
  }
}

export default NavMenu;
