import React from 'react';

import './modal.css';

const fields = [
  {
    title: 'Name',
    value: '',
    type: 'text'
  },
  {
    title: 'Types',
    value: 'Road bike',
    options: ['Road bike', 'Mountain bike', 'Cross bike', 'Gravel'],
    type: 'select'
  },
  {
    title: 'Weight',
    value: '',
    type: 'text'
  },
  {
    title: 'Brand',
    value: '',
    type: 'text'
  },
  {
    title: 'Model',
    value: '',
    type: 'text'
  },
  {
    title: 'Notes',
    value: '',
    type: 'textfield'
  },
]

export default function Modal({ heading }) {
  return (
    <div className="fade-layer">
      <div className="modal-window first-layer-card">
        <h3 className="modal-window__heading">Add a bike</h3>

        <form className="modal-window__main">

        </form>
      </div>
    </div>
  )
}
