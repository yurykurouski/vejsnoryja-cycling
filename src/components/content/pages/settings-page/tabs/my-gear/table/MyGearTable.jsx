import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';

import GearCard from '../gear-card/GearCard';
import Utils from '../../../../../../../utils';
import TableHeading from './table-fields/TableHeading';
import Modal from '../../../../../../common/modal/Modal';
import TableUserGear from './table-fields/TableUserGear';
import ModalForm from '../../../../../../common/modal/form/ModalForm';
import ModalDialog from '../../../../../../common/modal/dialog/ModalDialog';
import {
  deleteUserGear,
  editUserGear,
} from '../../../../../../../store/gear/actions';

function MyGearTable({
  gear,
  editUserGear,
  deleteUserGear,
  validationSchema,
}) {
  const [gearIdToDelete, setDeleteDialogOpen] = useState(false);
  const [gearIdToEdit, setEditDialogOpen] = useState(false);
  const [gearIdToCard, setCardDialogOpen] = useState(false);

  const handleCloseModal = () => {
    setDeleteDialogOpen(false);
    setEditDialogOpen(false);
    setCardDialogOpen(false);
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

  const handleEditModalSubmit = async (data) => {
    await editUserGear({ data, id: gearIdToEdit });
    setEditDialogOpen(false);
  };

  const handleModalCardOpen = () => gear.find((el) => el._id === gearIdToCard);

  return (
    <>
      <TableContainer className="my-gear__bikes first-layer-card">
        <Table aria-label="simple table" styles={{ color: 'var(--font-color-main)' }}>
          <TableHeading />

          <TableBody>

            <TableUserGear
              gear={gear}
              setCardDialogOpen={setCardDialogOpen}
              handleEditButtonClick={handleEditButtonClick}
              handleDeleteButtonClick={handleDeleteButtonClick}
            />

          </TableBody>
        </Table>
      </TableContainer>

      {gearIdToDelete && <Modal
        heading="You sure?"
        handleCloseModal={handleCloseModal}
      >
        <ModalDialog
          onYes={handleYesClick}
          onNo={handleCloseModal}
        />
      </Modal>}

      {gearIdToEdit && <Modal
        heading="Edit your bike info"
        handleCloseModal={handleCloseModal}
      >
        <ModalForm
          validationSchema={validationSchema}
          handleModalSubmit={handleEditModalSubmit}
          fields={Utils.filterGearbyId(gear, gearIdToEdit)}
          btnText="Save bike"
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
    </>
  );
}

MyGearTable.propTypes = {
  gear: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteUserGear: PropTypes.func.isRequired,
  editUserGear: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    deleteUserGear: (id) => dispatch(deleteUserGear(id)),
    editUserGear: (data) => dispatch(editUserGear(data)),
  };
}

export default connect(null, mapDispatchToProps)(MyGearTable);
