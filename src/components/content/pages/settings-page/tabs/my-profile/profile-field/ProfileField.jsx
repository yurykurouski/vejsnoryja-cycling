import React, { useState } from 'react';
import EventCardOption from '../../../../../../common/event-card/event-card-option/EventCardOption';

import './profile-field.css'

export default function ProfileField({ title, value, handleClick, editedFields, inEdit }) {
  const [inputValue, setInputValue] = useState(value);

  const handleCancelClick = () => {
    const filtered = editedFields.filter(f => f !== title);

    handleClick(editedFields = filtered);
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
            value={inputValue}
            className="my-profile__input form__input"
          />
          <button type="button" className="new-event__submit submit-btn">Save</button>
          {/* вынеси в отдельный компонент кнопку */}
          <EventCardOption
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
