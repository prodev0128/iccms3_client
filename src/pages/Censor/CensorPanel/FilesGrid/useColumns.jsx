import { useCodes } from '../../../../redux/selectors';

const useColumns = () => {
  const { individualCodes } = useCodes();
  const { cenFlag: cenFlags, org: orgs } = individualCodes;

  return [
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'org',
      headerName: 'Organization',
      width: 150,
      valueGetter: (value) => value || '',
      valueFormatter: (value) => (orgs?.find((org) => org.value === value) || {}).name,
    },
    {
      field: 'cenFlag',
      headerName: 'CenFlag',
      width: 100,
      valueGetter: (value) => value || '',
      valueFormatter: (value) => (cenFlags?.find((cenFlag) => cenFlag.value === value) || {}).name,
    },
  ];
};

export default useColumns;
