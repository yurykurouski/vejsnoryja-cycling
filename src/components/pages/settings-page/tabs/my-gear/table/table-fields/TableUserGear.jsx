import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ActiveToggler from '../actions/ActiveToggler';
import IconButton from '../../../../../../common/icon-button/IconButton';

export default function TableUserGear({
  gear,
  setCardDialogOpen,
  handleEditButtonClick,
  handleDeleteButtonClick,
}) {
  return (
    <>
      {gear[0] && gear.map((bike) => (
        <TableRow key={bike?._id}>
          <TableCell align="left">
            <ActiveToggler bike={bike} />
          </TableCell>

          <TableCell align="center" component="th" scope="row">
            <span
              className="bikes__bike-name"
              onClick={() => setCardDialogOpen(bike._id)}
              role="link"
              tabIndex={0}
            >
              {bike?.name}
            </span>
          </TableCell>

          <TableCell align="right">
            <IconButton
              onClick={() => handleEditButtonClick(bike._id)}
              btnTitle="Edit that bike"
              btnIcon="edit"
            />
            <IconButton
              onClick={() => handleDeleteButtonClick(bike._id)}
              btnTitle="Delete that bike"
              btnIcon="delete"
              color="red"
            />
          </TableCell>

        </TableRow>
      ))}
    </>
  );
}

TableUserGear.propTypes = {
  gear: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCardDialogOpen: PropTypes.func.isRequired,
  handleEditButtonClick: PropTypes.func.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
};
