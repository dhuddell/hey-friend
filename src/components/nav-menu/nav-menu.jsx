import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBanner: false,
    };
  }

  applyRef = (ref) => {
    this.vn = ref;
    this.vn.addEventListener('scroll', this.handleScroll);
  }


  handleScroll(e) {
    console.log('HANDLINGGGGGG');
    if (window.pageYOffset > 50) {
      console.log('scrolled');
      this.setState({
        showBanner: true,
      });
    } else {
      this.setState({
        showBanner: false,
      });
    }
  }

  render() {
    return (
      <div className="nav-menu" >
        <Link className="nav-menu-link" to="/">
          <span className="fa fa-users" />
        </Link>
        <span className="nav-menu-link" ref={this.applyRef}>
          {
            this.state.showBanner ?
              <a href="#0" className="fa fa-arrow-circle-up" /> :
              null
          }
        </span>
        <Link className="nav-menu-link" to="/settings">
          <span className="fa fa-gear" />
        </Link>
      </div>
    );
  }
}

export default NavMenu;
