import MenuToolbar from './MenuToolbar';

const useColumnActions = () => {
  return {
    field: 'actions',
    type: 'actions',
    width: 160,
    renderHeader: () => <MenuToolbar />,
    renderCell: ({ row }) => <></>,
  };
};

export default useColumnActions;
