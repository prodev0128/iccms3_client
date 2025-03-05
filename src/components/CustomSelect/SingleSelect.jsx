import { Autocomplete, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const SingleSelect = ({ error, haveDisableOption, helperText, label, onBlur, onChange, options, value, ...props }) => {
  const selectedOption = useMemo(() => options.find((option) => option?.value === value) || null, [options, value]);

  return (
    <Autocomplete
      autoHighlight
      fullWidth
      getOptionDisabled={(option) => haveDisableOption && !option.isActive}
      getOptionLabel={(option) => option.name}
      options={options}
      value={selectedOption}
      renderInput={(params) => (
        <TextField error={error} helperText={helperText} label={label} onBlur={onBlur} {...params} />
      )}
      onChange={(e, option) => onChange(option || {})}
      {...props}
    />
  );
};

SingleSelect.propTypes = {
  error: PropTypes.bool,
  haveDisableOption: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default SingleSelect;
