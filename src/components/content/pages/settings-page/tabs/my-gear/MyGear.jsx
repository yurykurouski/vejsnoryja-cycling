import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import Modal from '../../../../../common/modal/Modal';
import SettingsFields from '../../../../../../constants/settings-fields';
import ActiveToggler from './actions/ActiveToggler';
import IconButton from '../../../../../common/icon-button/IconButton';

import './my-gear.css';

const useStyles = makeStyles({
  container: {
    marginTop: 10
  },
});

export default function MyGear({ addNewGear, getUserGear, deleteUserGear, gear }) {
  const classes = useStyles();

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

  const handleModalSubmit = async (data, actions) => {
    await addNewGear(data);

    actions.resetForm();
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
        fields={SettingsFields.ADD_BIKE}
        btnText="Save bike"
        handleCloseModal={handleCloseModal}
        validationSchema={validationSchema}
        handleModalSubmit={handleModalSubmit}
      />}

      <TableContainer className={`my-gear__bikes first-layer-card ${classes.container}`}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Active</TableCell>
              <TableCell align="center">Bike name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {gear.map((bike) => (
              <TableRow key={bike._id}>
                <TableCell align="left">
                  <ActiveToggler bike={bike} />
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <span className="bikes__bike-name">{bike.name}</span>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => deleteUserGear(bike._id)}
                    btnTitle="Delete that bike"
                    btnIcon="delete"
                  />
                  and edit
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


