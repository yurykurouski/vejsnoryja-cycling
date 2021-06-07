import React from 'react';

export default function EventLevel(props) {
  const { onChange, value } = props;

  return (
    <label className="input__label">
      Level/Event type

      <select
        name="level"
        type="text"
        value={value}
        onChange={onChange}
        className="form__input form__input_level"
      >

        <option value="Casual">Casual/No Drop</option>
        <option value="Tempo">Tempo</option>
        <option value="Race">Race Pace</option>
      </select>
    </label>
  );
}
