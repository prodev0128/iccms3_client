import {
  CheckTwoTone,
  DeleteTwoTone,
  DoDisturbTwoTone,
  EditTwoTone,
  ErrorTwoTone,
  InfoTwoTone,
} from '@mui/icons-material';
import { Chip } from '@mui/material';
import { useMemo } from 'react';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { codeOptionTypes } from '../../../../globals/constants';
import { useCodeOptions, useCodes } from '../../../../redux/selectors';

const useColumns = (actions) => {
  const { currentCodeOption } = useCodeOptions();
  const { individualCodes } = useCodes();

  const extraOptions = useMemo(
    () =>
      currentCodeOption?.options?.map((option) => {
        const column = {
          field: `options.${option?.key}`,
          headerName: option?.name,
          width: 150,
          valueGetter: (value, row) => row?.options?.[option?.key],
        };
        if (option?.type === codeOptionTypes.SINGLE_SELECT.value) {
          column.valueFormatter = (value) =>
            individualCodes?.[option?.ref]?.find((item) => item?.value === value)?.name || '';
        }
        switch (option?.type) {
          case codeOptionTypes.NUMBER.value:
            column.type = 'number';
            break;
          case codeOptionTypes.BOOLEAN.value:
            column.type = 'boolean';
            break;
          default:
            break;
        }
        return column;
      }) || [],
    [currentCodeOption, individualCodes],
  );

  return [
    {
      field: 'actions',
      type: 'actions',
      width: 125,
      renderCell: ({ row }) => (
        <>
          <GridActionItem
            icon={CheckTwoTone}
            label="Allow"
            visible={!row.isActive}
            onClick={() => actions.allowCode(row)}
          />
          <GridActionItem
            icon={DoDisturbTwoTone}
            label="Disallow"
            visible={!!row.isActive}
            onClick={() => actions.disallowCode(row)}
          />
          <GridActionItem icon={EditTwoTone} label="Edit" onClick={() => actions.updateCode(row)} />
          <GridActionItem icon={DeleteTwoTone} label="Delete" onClick={() => actions.deleteCode(row)} />
        </>
      ),
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
    ...extraOptions,
  ];
};

export default useColumns;
