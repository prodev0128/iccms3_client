import { CheckTwoTone } from '@mui/icons-material';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';

const useColumns = (actions, individualCodes) => {
  const { dep: deps = [], job: jobs = [] } = individualCodes;
  return [
    {
      field: 'actions',
      getActions: ({ row }) => [
        <GridActionItem
          icon={<CheckTwoTone />}
          key="Allow"
          label="Allow"
          visible={!row.isActive}
          onClick={() => actions.allowUser(row)}
        />,
      ],
      type: 'actions',
      width: 160,
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'fileType', headerName: 'Type', width: 150 },
  ];
};

export default useColumns;
