import { DeleteTwoTone } from '@mui/icons-material';
import { Grid2, IconButton, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import SingleSelect from '../../../../../components/CustomSelect/SingleSelect';
import { codeOptionTypes } from '../../../../../globals/constants';
import { getCodeOptionTypesToArray } from '../../../../../globals/utils';
import { useCodeOptions } from '../../../../../redux/selectors';

const ExtraOptionItem = ({ handleRemoveOption, option, updateOptionsData }) => {
  const { codeOptions: originalCodeOptions } = useCodeOptions();
  const codeOptions = useMemo(
    () => originalCodeOptions.map((option) => ({ value: option.type, name: option.name })),
    [originalCodeOptions],
  );

  return (
    <Grid2 container columns={13} spacing={2}>
      <Grid2 size={3}>
        <TextField
          fullWidth
          label="key"
          placeholder="key"
          value={option?.key || ''}
          onChange={(e) => updateOptionsData('key', e.target.value)}
        />
      </Grid2>
      <Grid2 size={3}>
        <TextField
          fullWidth
          label="name"
          placeholder="name"
          value={option?.name || ''}
          onChange={(e) => updateOptionsData('name', e.target.value)}
        />
      </Grid2>
      <Grid2 size={3}>
        <SingleSelect
          label="type"
          options={getCodeOptionTypesToArray()}
          value={option?.type || ''}
          onChange={({ value }) => updateOptionsData('type', value)}
        />
      </Grid2>
      <Grid2 size={3}>
        {[codeOptionTypes.SINGLE_SELECT.value, codeOptionTypes.MULTI_SELECT.value].includes(option?.type) && (
          <SingleSelect
            label="code-option"
            options={codeOptions}
            value={option?.ref || ''}
            onChange={({ value }) => updateOptionsData('ref', value)}
          />
        )}
      </Grid2>
      <Grid2 size={1}>
        <IconButton color="error" onClick={handleRemoveOption}>
          <DeleteTwoTone />
        </IconButton>
      </Grid2>
    </Grid2>
  );
};

ExtraOptionItem.propTypes = {
  handleRemoveOption: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
  updateOptionsData: PropTypes.func.isRequired,
};

export default ExtraOptionItem;
