import { AppRegistrationTwoTone } from '@mui/icons-material';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { useCodes } from '../../../../redux/selectors';
import MenuToolbar from './MenuToolbar';

const useColumns = (actions) => {
  const { individualCodes } = useCodes();
  const { dep: deps = [], job: jobs = [] } = individualCodes;

  return [
    {
      field: 'actions',
      getActions: ({ row }) => [
        <GridActionItem
          icon={<AppRegistrationTwoTone />}
          key="Register"
          label="Register"
          visible={!row.isActive}
          onClick={() => actions.updateInvoicesStatus([row.id])}
        />,
      ],
      renderHeader: (params) => <MenuToolbar actions={actions} />,
      type: 'actions',
      width: 160,
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'fileType', headerName: 'Type', width: 150 },
  ];
};

export default useColumns;
