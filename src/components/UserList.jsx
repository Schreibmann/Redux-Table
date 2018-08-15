import React, { Component } from 'react';
import { func, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/editUserFormActions';
import { showForm, setFormMode, setCurrentUser } from '../actions/userFormActions';

class UserList extends Component {
  handleEditClick(id, data) {
    const {
      setCurrentUser,
      setFormMode,
      showForm,
    } = this.props;
    const user = { ...data, id };

    setCurrentUser(user);
    setFormMode('edit');
    showForm();
  }

  handleDeleteClick(id) {
    const { deleteUser } = this.props;
    deleteUser(id);
  }

  render() {
    const { userList } = this.props;
    const rows = userList.map((user, idx) => (
      <tr key={idx}>
        <td className="edit_icon">
          <a role="button" onClick={this.handleEditClick.bind(this, idx, user)} className="fa fa-pencil fa-fw" />
        </td>
        <td className="delete_icon">
          <a role="button" onClick={this.handleDeleteClick.bind(this, idx)} className="fa fa-close fa-fw" />
        </td>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>-----</td>
        <td>-----</td>
        <td>-----</td>
        <td>-----</td>
      </tr>
    ));
    return (
      <table className="userlist">
        <thead className="userlist__header">
          <tr>
            <th colSpan="2" />
            <th>Клиент</th>
            <th>Телефон</th>
            <th>E-mail</th>
            <th>Дата последнего посещения</th>
            <th>Сумма оплат</th>
            <th>Количество посещений</th>
            <th>Активный абонемент</th>
          </tr>
        </thead>
        <tbody>
          {(rows.length > 0) ? rows
            : (
              <tr>
                <td colSpan="9">
                  <p>Ни одного пользователя не найдено...</p>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}

UserList.propTypes = {
  showForm: func.isRequired,
  setFormMode: func.isRequired,
  setCurrentUser: func.isRequired,
  deleteUser: func.isRequired,
  userList: arrayOf(object).isRequired,
};

const mapStateToProps = state => ({
  userList: state.userList,
});

export default connect(mapStateToProps, {
  deleteUser, showForm, setFormMode, setCurrentUser,
})(UserList);
