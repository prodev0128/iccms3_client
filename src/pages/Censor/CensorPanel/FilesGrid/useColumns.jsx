import { useCodes } from '../../../../redux/selectors';

const useColumns = () => {
  const { individualCodes } = useCodes();
  const { cenFlag: cenFlags } = individualCodes;

  return [
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'cenFlag',
      headerName: 'CenFlag',
      width: 150,
      valueGetter: (value) => value || '',
      valueFormatter: (value) => (cenFlags?.find((cenFlag) => cenFlag.value === value) || {}).name,
    },
  ];
};

export default useColumns;
