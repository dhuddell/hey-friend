import React from 'react';
import { Header, HeaderMenu, ContactItems } from './components';
import MockData from '../__mocks__/fileMock';

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
        <HeaderMenu />
        <ContactItems contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Home;
