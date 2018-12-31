import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
// import MockData from '../../__mocks__/fileMock';
import { GetFriendQuery } from '../../graphql/queries';
import {
  Header,
  NavMenu,
  Modal,
  FriendContent,
  AppLoading,
  AppError,
} from '..';

class Friend extends Component {
  constructor(props) {
    super(props);
    // const friend = MockData.friends.find((x) => x.id === );
    this.state = {
      // id: this.props.match.params.friendId,
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  handleSubmit = (e) => { // does this need to be here?
    e.preventDefault();
    this.setState({ show: false });
    // saveEditGoals('do shit') mutation
  }

  render() {
    return (
      <div>
        <Query query={GetFriendQuery} variables={{ id: this.props.match.params.id }} >
          {
            ({ loading, error, data }) => {
              if (loading) return <AppLoading />;
              if (error) return <AppError />;

              return (
                <Fragment>
                  <Header />
                  <NavMenu />
                  <Modal
                    handleClose={this.hideModal}
                    show={this.state.show}
                    handleSubmit={this.handleSubmit}
                    goals={data.friend.goals}
                  />
                  <FriendContent friend={data.friend} showModal={this.showModal} />
                </Fragment>
              );
            }
          }
        </Query>
      </div>
    );
  }
}

Friend.propTypes = {
  friend: PropTypes.object,
  match: PropTypes.object,
};

export default Friend;
