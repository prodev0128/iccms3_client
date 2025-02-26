import { Autocomplete, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const SingleSelect = ({ error, helperText, hideDisabled, label, onBlur, onChange, options, value, ...props }) => {
  const newOptions = useMemo(
    () => (hideDisabled ? options.filter((option) => option.isActive) : options),
    [hideDisabled, options],
  );
  const selectedOption = useMemo(
    () => newOptions.find((option) => option.value === value) || null,
    [newOptions, value],
  );

  return (
    <Autocomplete
      autoHighlight
      fullWidth
      getOptionDisabled={(option) => !option.isActive}
      getOptionLabel={(option) => option.name}
      options={newOptions}
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
  helperText: PropTypes.string,
  hideDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default SingleSelect;
