import {
  CheckTwoTone,
  DeleteTwoTone,
  DoDisturbTwoTone,
  EditTwoTone,
  ErrorTwoTone,
  InfoTwoTone,
} from '@mui/icons-material';
import { Chip } from '@mui/material';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';

const useColumns = (actions) => {
  return [
    {
      field: 'actions',
      getActions: ({ row }) => [
        <GridActionItem
          icon={<CheckTwoTone />}
          key="Allow"
          label="Allow"
          visible={!row.isActive}
          onClick={() => actions.allowCode(row)}
        />,
        <GridActionItem
          icon={<DoDisturbTwoTone />}
          key="Disallow"
          label="Disallow"
          visible={row.isActive}
          onClick={() => actions.disallowCode(row)}
        />,
        <GridActionItem
          visible
          icon={<EditTwoTone />}
          key="Edit"
          label="Edit"
          onClick={() => actions.updateCode(row)}
        />,
        <GridActionItem
          visible
          icon={<DeleteTwoTone />}
          key="Delete"
          label="Delete"
          onClick={() => actions.deleteCode(row)}
        />,
      ],
      type: 'actions',
      width: 125,
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'value', headerName: 'Value', width: 150 },
    {
      field: 'isActive',
      headerName: 'Active',
      type: 'boolean',
      width: 150,
      renderCell: ({ value }) => {
        const color = value ? 'info' : 'secondary';
        const icon = value ? <InfoTwoTone fontSize="small" /> : <ErrorTwoTone fontSize="small" />;
        const label = value ? 'Active' : 'Disabled';
        return <Chip color={color} icon={icon} label={label} sx={{ fontWeight: 'bold' }} variant="outlined" />;
      },
    },
  ];
};

export default useColumns;
