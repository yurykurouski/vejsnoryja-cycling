import React, { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import GearCard from './gear-card/GearCard';
import Utils from '../../../../../../utils';
import MyGearTable from './table/MyGearTable';
import Modal from '../../../../../common/modal/Modal';
import ModalForm from '../../../../../common/modal/form/ModalForm';
import ModalDialog from '../../../../../common/modal/dialog/ModalDialog';
import SettingsFields from '../../../../../../constants/components-fields/settings-fields';

import './my-gear.css';

export default function MyGear({
  addNewGear,
  deleteUserGear,
  editUserGear,
  gear,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [gearIdToDelete, setDeleteDialogOpen] = useState(false);
  const [gearIdToEdit, setEditDialogOpen] = useState(false);
  const [gearIdToCard, setCardDialogOpen] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required('Please name your bike'),
    weight: Yup
      .number()
      .required('You must enter a valid weight for your bike.')
      .typeError('The weight must be entered as a number.'),
  });

  const handleAddBikeClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setDeleteDialogOpen(false);
    setEditDialogOpen(false);
    setCardDialogOpen(false);
  };

  const handleModalSubmit = async (data) => {
    await addNewGear(data);

    handleCloseModal();
  };

  const handleDeleteButtonClick = (id) => {
    setDeleteDialogOpen(id);
  };

  const handleYesClick = async () => {
    await deleteUserGear(gearIdToDelete);
    setDeleteDialogOpen(false);
  };

  const handleEditButtonClick = async (id) => {
    setEditDialogOpen(id);
  };

  const filterGearbyId = () => {
    const filtered = gear.find((el) => el._id === gearIdToEdit);

    return Utils.makeInputTemplateFromState(filtered);
  };

  const handleEditModalSubmit = async (data) => {
    await editUserGear({ data, id: gearIdToEdit });
    setEditDialogOpen(false);
  };

  const handleModalCardOpen = () => gear.find((el) => el._id === gearIdToCard);

  return (
    <div className="settings__my-gear first-layer-card_hovered">
      <button
        className="my-gear__submit submit-btn"
        onClick={handleAddBikeClick}
        type="button"
      >
        Add bike
      </button>

      {modalOpen && <Modal
        heading="Add a bike"
        handleCloseModal={handleCloseModal}
      >
        <ModalForm
          validationSchema={validationSchema}
          handleModalSubmit={handleModalSubmit}
          fields={SettingsFields.ADD_BIKE}
          btnText="Save bike"
        />
      </Modal>}

      {gearIdToEdit && <Modal
        heading="Edit your bike info"
        handleCloseModal={handleCloseModal}
      >
        <ModalForm
          validationSchema={validationSchema}
          handleModalSubmit={handleEditModalSubmit}
          fields={filterGearbyId()}
          btnText="Save bike"
        />
      </Modal>}

      {gearIdToDelete && <Modal
        heading="You sure?"
        handleCloseModal={handleCloseModal}
      >
        <ModalDialog
          onYes={handleYesClick}
          onNo={handleCloseModal}
        />
      </Modal>}

      {gearIdToCard && <Modal
        heading="Your bike"
        handleCloseModal={handleCloseModal}
      >
        <GearCard
          handleModalCardOpen={handleModalCardOpen}
        />
      </Modal>}

      <MyGearTable
        deleteUserGear={handleDeleteButtonClick}
        editUserGear={handleEditButtonClick}
        handleClickOnGear={(id) => setCardDialogOpen(id)}
        gear={gear}
      />

    </div>
  );
}

MyGear.propTypes = {
  addNewGear: PropTypes.func.isRequired,
  deleteUserGear: PropTypes.func.isRequired,
  editUserGear: PropTypes.func.isRequired,
  gear: PropTypes.arrayOf(PropTypes.object).isRequired,
};
