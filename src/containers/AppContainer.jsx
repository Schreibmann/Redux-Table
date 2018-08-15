import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import HeaderTitle from '../components/HeaderTitle';
import Close from '../components/Close';
import AddUserButton from '../components/AddUserButton';
import EditUserForm from '../components/EditUserForm';
import UserList from '../components/UserList';
import { showForm, setFormMode } from '../actions/userFormActions';

class AppContainer extends Component {
  HandleAddUserButtonClick() {
    const { showForm, setFormMode } = this.props;
    showForm();
    setFormMode('add');
  }

  render() {
    return (
      <div className="app app__wrapper">
        <main>
          <div className="table">
            <div className="table__header">
              <Close />
              <HeaderTitle />
            </div>
            <AddUserButton showForm={() => this.HandleAddUserButtonClick()} />
            <EditUserForm />
            <UserList />
          </div>
        </main>
      </div>
    );
  }
}

AppContainer.propTypes = {
  showForm: func.isRequired,
  setFormMode: func.isRequired,
};

export default connect(null, { showForm, setFormMode })(AppContainer);
