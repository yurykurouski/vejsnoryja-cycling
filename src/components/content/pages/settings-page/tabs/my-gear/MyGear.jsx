import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MyGearTable from './table/MyGearTable';
import Modal from '../../../../../common/modal/Modal';
import ModalForm from '../../../../../common/modal/form/ModalForm';
import SettingsFields from '../../../../../../constants/components-fields/settings-fields';
import {
  addNewGear,
  getUserGear,
} from '../../../../../../store/gear/actions';

import './my-gear.css';

function MyGear({
  gear,
  addNewGear,
  getUserGear,
}) {
  const [addGearModal, setAddGearModalOpen] = useState(false);

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
  });

  const handleAddBikeClick = () => {
    setAddGearModalOpen(true);
  };

  const handleCloseModal = () => {
    setAddGearModalOpen(false);
  };

  const handleModalSubmit = async (data) => {
    await addNewGear(data);

    handleCloseModal();
  };

  return (
    <div className="settings__my-gear first-layer-card_hovered">
      <button
        className="my-gear__submit submit-btn"
        onClick={handleAddBikeClick}
        type="button"
      >
        Add a bike
      </button>

      <MyGearTable
        validationSchema={validationSchema}
        gear={gear}
      />

      {addGearModal && <Modal
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

    </div>
  );
}

MyGear.propTypes = {
  addNewGear: PropTypes.func.isRequired,
  getUserGear: PropTypes.func.isRequired,
  gear: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    gear: state.gear.gear,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewGear: (data) => dispatch(addNewGear(data)),
    getUserGear: () => dispatch(getUserGear()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGear);
