import MenuToolbar from './MenuToolbar';

const useColumnActions = (actions, censorActions) => {
  return {
    field: 'actions',
    type: 'actions',
    width: 160,
    renderHeader: () => <MenuToolbar actions={actions} />,
    renderCell: ({ row }) => <></>,
  };
};

export default useColumnActions;
