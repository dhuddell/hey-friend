import React from 'react';
import { Header, NavMenu, ContactItems } from '..';
import MockData from '../../__mocks__/fileMock';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { contacts: [] };
  }

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts() {
    this.setState({
      contacts: MockData.contacts,
    });
  }


  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        <ContactItems contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Home;
