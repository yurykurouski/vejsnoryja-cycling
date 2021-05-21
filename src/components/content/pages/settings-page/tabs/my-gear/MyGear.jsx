import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

import Modal from '../../../../../common/modal/Modal';
import ModalForm from '../../../../../common/modal/form/ModalForm';
import SettingsFields from '../../../../../../constants/settings-fields';
import MyGearTable from './table/MyGearTable';

import './my-gear.css';

export default function MyGear({ addNewGear, getUserGear, deleteUserGear, gear }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getUserGear();
  }, [getUserGear]);

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required('Please name your bike'),
    weight: Yup
      .number()
      .required('You must enter a valid weight for your bike.')
      .typeError('The weight must be entered as a number.'),
  })

  const handleClick = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const handleModalSubmit = async (data) => {
    await addNewGear(data);

    handleCloseModal();
  }

  return (
    <div className="settings__my-gear first-layer-card_hovered">
      <button
        className="my-gear__submit submit-btn"
        onClick={handleClick}
      >Add bike</button>

      {modalOpen && <Modal
        heading="Add a bike"
        handleCloseModal={handleCloseModal}
        component={
          <ModalForm
            validationSchema={validationSchema}
            handleModalSubmit={handleModalSubmit}
            fields={SettingsFields.ADD_BIKE}
            btnText="Save bike"
          />
        }
      />
      }

      <MyGearTable
        deleteUserGear={deleteUserGear}
        gear={gear}
      />

    </div>
  );
}


