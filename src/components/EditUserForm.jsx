import React, { Component } from 'react';
import { func, bool, string, object } from 'prop-types';
import { connect } from 'react-redux';
import { addUser, editUser } from '../actions/editUserFormActions';
import { closeForm, setFormMode } from '../actions/userFormActions';

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  componentDidUpdate(prevProps) {
    const { mode } = this.props;
    if (mode === 'edit' && mode !== prevProps.mode) {
      this.fillForm();
    } else if (mode === 'add' && mode !== prevProps.mode) {
      this.clearForm();
    }
  }

  fillForm() {
    const { user } = this.props;

    this.setState({
      ...user,
    });
  }

  clearForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
    });
  }

  handleSubmit(e) {
    const {
      mode, user, addUser, editUser, closeForm, setFormMode,
    } = this.props;
    const userData = this.state;
    if (mode === 'add') {
      addUser(userData);
    } else if (mode === 'edit') {
      editUser(user.id, userData);
    }

    this.clearForm();
    closeForm();
    setFormMode('idle');
    e.preventDefault();
  }

  handleInputChange(inputId, e) {
    switch (inputId) {
      case 'name':
        this.setState({
          name: e.target.value,
        });
        break;
      case 'email':
        this.setState({
          email: e.target.value,
        });
        break;
      case 'phone':
        this.setState({
          phone: e.target.value,
        });
        break;
      default:
        return null;
    }
  }

  render() {
    const { visible } = this.props;
    const { name, phone, email } = this.state;
    const visibilityClassName = visible ? 'add-user__form--visible' : 'add-user__form--hidden';

    return (
      <form className={['add-user__form', visibilityClassName].join(' ')}>
        <section className="input-area">
          <div className="input-name">
            <label htmlFor="fio" className="input-label">
                      Имя
              <br />
              <input
                type="text"
                id="fio"
                value={name}
                onChange={this.handleInputChange.bind(this, 'name')}
                className=""
              />
            </label>
          </div>
          <div className="input-phone">
            <label htmlFor="phone" className="input-label">
                      Телефон
              <br />
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={this.handleInputChange.bind(this, 'phone')}
                className=""
              />
            </label>
          </div>
          <div className="divider" />
          <div className="input-email">
            <label htmlFor="email" className="input-label">
                      E-mail
              <br />
              <input
                type="text"
                id="email"
                value={email}
                onChange={this.handleInputChange.bind(this, 'email')}
                className=""
              />
            </label>
          </div>
          <div className="submit__button__wrapper">
            <button type="submit" onClick={this.handleSubmit.bind(this)} className="button submit__button">
                      Сохранить
            </button>
          </div>
        </section>
        <div className="collapse-bar">
          <span className="collapse-arrow collapse-arrow--left" />
          <span className="collapse-arrow collapse-arrow--right" />
        </div>
      </form>
    );
  }
}

EditUserForm.propTypes = {
  addUser: func.isRequired,
  editUser: func.isRequired,
  closeForm: func.isRequired,
  setFormMode: func.isRequired,
  visible: bool.isRequired,
  mode: string.isRequired,
  user: object,
};

const mapStateToProps = state => ({
  visible: state.userForm.visible,
  mode: state.userForm.mode,
  user: state.userForm.currentUser,
});

export default connect(mapStateToProps, {
  addUser, editUser, closeForm, setFormMode,
})(EditUserForm);
