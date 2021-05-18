import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Modal from '../../../../../common/modal/Modal';

const fields = [
  {
    title: 'Name',
    name: 'name',
    value: '',
    type: 'text'
  },
  {
    title: 'Types',
    name: 'types',
    value: 'Road bike',
    options: ['Road bike', 'Mountain bike', 'Cross bike', 'Gravel'],
    type: 'select'
  },
  {
    title: 'Weight',
    name: 'weight',
    value: '',
    type: 'text'
  },
  {
    title: 'Brand',
    name: 'brand',
    value: '',
    type: 'text'
  },
  {
    title: 'Model',
    name: 'model',
    value: '',
    type: 'text'
  },
  {
    title: 'Notes',
    name: 'notes',
    value: '',
    type: 'textfield'
  },
]

const useStyles = makeStyles({
  container: {
    marginTop: 10
  },
});

export default function MyGear() {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);

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

  const handleModalSubmit = (data, actions) => {


    actions.resetForm();
    handleCloseModal();
  }

  return (
    <div className="settings__my-gear first-layer-card_hovered">
      <button
        className="submit-btn"
        onClick={handleClick}
      >Add bike</button>

      {modalOpen && <Modal
        heading="Add a bike"
        fields={fields}
        btnText="Save bike"
        handleCloseModal={handleCloseModal}
        validationSchema={validationSchema}
        handleModalSubmit={handleModalSubmit}
      />}

      <TableContainer className={`my-gear__bikes first-layer-card ${classes.container}`}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Default</TableCell>
              <TableCell align="right">Bike</TableCell>
              <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}
