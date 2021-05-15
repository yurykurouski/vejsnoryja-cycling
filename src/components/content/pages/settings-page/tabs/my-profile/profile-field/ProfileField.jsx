import React, { useState } from 'react';
import IconButton from '../../../../../../common/icon-button/IconButton';
import { SUBMIT_KEYCODE } from '../../../../../../../constants/';

import './profile-field.css';

export default function ProfileField({ title, value, handleClick, editedFields, inEdit, updateUserInfo }) {
  const [inputValue, setInputValue] = useState(value);

  const handleCancelClick = () => {
    const filtered = editedFields.filter(f => f !== title);

    handleClick(editedFields = filtered);
  }

  const handleSave = async () => {
    const field = {
      'field': title,
      'value': inputValue
    }

    await updateUserInfo(field);
    handleCancelClick();
  }

  const handleSubmitKeyDown = (e) => {
    if (e.keyCode === SUBMIT_KEYCODE) {
      handleSave()
    }
  }

  return (
    <div className="my-profile__field-wrap">
      <span className="my-profile__field-title my-profile__field">{title}:</span>

      {inEdit
        ?
        <span className="my-profile__field_edit">
          <input
            name={value}
            type='text'
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSubmitKeyDown}
            value={inputValue}
            className="my-profile__input form__input"
            autoFocus={true}
          />
          <button
            type="button"
            className="new-event__submit submit-btn"
            onClick={handleSave}
          >Save</button>

          <IconButton
            btnTitle="Close"
            btnIcon="close"
            onClick={handleCancelClick}
          />
        </span>

        :
        <span
          onClick={() => handleClick(editedFields = [...editedFields, title])}
          className="my-profile__field-value my-profile__field"
        >{value ? value : 'Change'}</span>
      }
    </div>
  )
}
