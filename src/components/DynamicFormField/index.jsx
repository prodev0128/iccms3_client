import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import PropTypes from 'prop-types';

import { codeOptionTypes } from '../../globals/constants';
import SingleSelect from '../CustomSelect/SingleSelect';

const DynamicFormField = ({ label, onChange, options, type, value }) => {
  switch (type) {
    case codeOptionTypes.TEXT.value:
      return <TextField fullWidth label={label} value={value} onChange={(e) => onChange(e.target.value)} />;
    case codeOptionTypes.NUMBER.value:
      return (
        <TextField fullWidth label={label} type="number" value={value} onChange={(e) => onChange(e.target.value)} />
      );
    case codeOptionTypes.BOOLEAN.value:
      return (
        <FormControlLabel
          fullWidth
          control={<Checkbox checked={value} onChange={(e) => onChange(e.target.checked)} />}
          label={label}
        />
      );
    case codeOptionTypes.SINGLE_SELECT.value:
      return <SingleSelect label={label} options={options} value={value} onChange={(e) => onChange(e.value)} />;
    case codeOptionTypes.MULTI_SELECT.value:
      return <SingleSelect label={label} options={options} value={value} onChange={(e) => onChange(e.value)} />;
    default:
      return <></>;
  }
};

DynamicFormField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.array, PropTypes.number]).isRequired,
};

export default DynamicFormField;
