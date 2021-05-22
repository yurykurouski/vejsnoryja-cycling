import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

import MyGearTable from './table/MyGearTable';
import Modal from '../../../../../common/modal/Modal';
import ModalForm from '../../../../../common/modal/form/ModalForm';
import ModalDialog from '../../../../../common/modal/dialog/ModalDialog';
import SettingsFields from '../../../../../../constants/settings-fields';

import './my-gear.css';

export default function MyGear({ addNewGear, getUserGear, deleteUserGear, editUserGear, gear }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [gearIdToDelete, setDialogOpen] = useState(false);


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

  const handleAddBikeClick = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
    setDialogOpen(false);
  }

  const handleModalSubmit = async (data) => {
    await addNewGear(data);

    handleCloseModal();
  }

  const handleDeleteButtonClick = (id) => {
    setDialogOpen(id);
  }

  const handleYesClick = async () => {
    await deleteUserGear(gearIdToDelete);
    setDialogOpen(false);
  }

  const handleEditButtonClick = async () => {
    console.log('sdfds')
  }


  return (
    <div className="settings__my-gear first-layer-card_hovered">
      <button
        className="my-gear__submit submit-btn"
        onClick={handleAddBikeClick}
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

      {gearIdToDelete && <Modal
        heading="You sure?"
        handleCloseModal={handleCloseModal}
        component={
          <ModalDialog
            onYes={handleYesClick}
            onNo={handleCloseModal}
          />
        }
      />
      }

      <MyGearTable
        deleteUserGear={handleDeleteButtonClick}
        editUserGear={handleEditButtonClick}
        gear={gear}
      />

    </div>
  );
}


