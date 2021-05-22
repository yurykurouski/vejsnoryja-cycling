import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import * as Yup from 'yup';

import MyGearTable from './table/MyGearTable';
import Modal from '../../../../../common/modal/Modal';
import ModalForm from '../../../../../common/modal/form/ModalForm';
import ModalDialog from '../../../../../common/modal/dialog/ModalDialog';
import SettingsFields from '../../../../../../constants/settings-fields';
import './my-gear.css';
import { makeInputTemplateFromState } from '../../../../../../utils';

export default function MyGear({ addNewGear, getUserGear, deleteUserGear, editUserGear, gear }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [gearIdToDelete, setDeleteDialogOpen] = useState(false);
  const [gearIdToEdit, setEditDialogOpen] = useState(false);

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
    setDeleteDialogOpen(false);
    setEditDialogOpen(false);
  }

  const handleModalSubmit = async (data) => {
    await addNewGear(data);

    handleCloseModal();
  }

  const handleDeleteButtonClick = (id) => {
    setDeleteDialogOpen(id);
  }

  const handleYesClick = async () => {
    await deleteUserGear(gearIdToDelete);
    setDeleteDialogOpen(false);
  }

  const handleEditButtonClick = async (id) => {
    setEditDialogOpen(id);
  }

  const filterGearbyId = () => {
    const filtered = gear.find(el => el._id === gearIdToEdit);

    return makeInputTemplateFromState(filtered);
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

      {gearIdToEdit && <Modal
        heading="Edit your bike info"
        handleCloseModal={handleCloseModal}
        component={
          <ModalForm
            validationSchema={validationSchema}
            handleModalSubmit={handleModalSubmit}
            fields={filterGearbyId()}
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


