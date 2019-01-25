import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
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
    this.state = {
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
                    handleSubmit={this.handleSubmit}
                    handleClose={this.hideModal}
                    show={this.state.show}
                    goals={data.friend.goals}
                    id={data.friend.id}
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
