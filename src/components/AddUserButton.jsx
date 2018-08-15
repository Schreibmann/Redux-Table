import React from 'react';

const AddUserButton = props => (
  <div onClick={props.showForm} className="add-user__caption">
    <span className="caption__label">
      <svg viewBox="0,0 100,100" className="plus">
        <path d="M 0,35 35,35 35,0 65,0 65,35 100,35 100,65 65,65 65,100 35,100 35,65 0,65 z" />
      </svg>
      Добавить клиента
    </span>
  </div>
);

export default AddUserButton;
