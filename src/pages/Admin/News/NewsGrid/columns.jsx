import { DeleteTwoTone, EditTwoTone } from '@mui/icons-material';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';

const useColumns = (actions) => {
  return [
    {
      field: 'actions',
      renderCell: ({ row }) => (
        <>
          <GridActionItem icon={EditTwoTone} label="Edit" onClick={() => actions.updateNews(row)} />
          <GridActionItem icon={DeleteTwoTone} label="Delete" onClick={() => actions.deleteNews(row)} />
        </>
      ),
      type: 'actions',
      width: 100,
    },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'content', headerName: 'Content', width: 300 },
  ];
};

export default useColumns;
