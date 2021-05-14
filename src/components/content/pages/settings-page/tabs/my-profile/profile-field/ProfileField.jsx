import React from 'react';
import Icon from '@material-ui/core/Icon';
import EventCardOption from '../../../../../../common/event-card/event-card-option/EventCardOption';

import './profile-field.css'

export default function ProfileField({ title, value, handleClick, editedField, inEdit }) {
  console.log(inEdit)
  return (
    <div className="my-profile__field-wrap">
      <span className="my-profile__field-title my-profile__field">{title}:</span>

      {inEdit
        ?
        <span className="my-profile__field_edit">
          <input
            name={value}
            type='text'
            // onChange={onChange}
            value={value}
            className="my-profile__input form__input"
          />
          <button type="button" className="new-event__submit submit-btn">Save</button>
          {/* вынеси в отдельный компонент кнопку */}
          <EventCardOption
            btnTitle="Close"
            btnIcon="close"
          />
        </span>

        :
        <span
          onClick={() => handleClick(editedField = [...editedField, title])}
          className="my-profile__field-value my-profile__field"
        >{value ? value : 'Change'}</span>
      }
    </div>
  )
}
