import { Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';

const TabList = ({ color, onChange, tabs, value }) => {
  return (
    <Tabs
      centered
      indicatorColor={color}
      textColor={color}
      value={value}
      variant="fullWidth"
      onChange={(_, value) => onChange(value)}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.name} value={tab.value} />
      ))}
    </Tabs>
  );
};

TabList.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default TabList;
