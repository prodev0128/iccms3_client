import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { codeOptionTypes } from '../../globals/constants';
import SingleSelect from '../CustomSelect/SingleSelect';

const CodeItem = ({ individualCodes, onChange, option, value }) => {
  const { name = '', type = '' } = option;

  const options = useMemo(() => {
    if ([codeOptionTypes.SINGLE_SELECT.value, codeOptionTypes.MULTI_SELECT.value].includes(option.type)) {
      return individualCodes[option.value] || [];
    }
    return [];
  }, [option, individualCodes]);

  switch (type) {
    case codeOptionTypes.TEXT.value:
      return <TextField fullWidth label={name} value={value} onChange={(e) => onChange(e.target.value)} />;
    case codeOptionTypes.BOOLEAN.value:
      return (
        <FormControlLabel
          fullWidth
          control={<Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />}
          label={name}
        />
      );
    case codeOptionTypes.SINGLE_SELECT.value:
      return <SingleSelect label={name} options={options} value={value} onChange={(e) => onChange(e.value)} />;
    case codeOptionTypes.MULTI_SELECT.value:
      return <SingleSelect label={name} options={options} value={value} onChange={(e) => onChange(e.value)} />;
    default:
      return <></>;
  }
};

CodeItem.propTypes = {
  individualCodes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.array, PropTypes.number]).isRequired,
};

export default CodeItem;
