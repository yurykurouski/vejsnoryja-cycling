import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import SettingsFields from '../../../../../../../../constants/components-fields/settings-fields';

export default function TableHeading() {
  return (
    <TableHead>
      <TableRow>
        {SettingsFields.TABLE_COLUMNS.map((field) => (
          <TableCell
            key={field.title}
            align={field.align}
          >
            {field.title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
