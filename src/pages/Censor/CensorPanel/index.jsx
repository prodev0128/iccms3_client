import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import CensorGrid from './CensorGrid';
import DataTypeTabs from './Tabs/DataTypeTabs';
import StatusTabs from './Tabs/StatusTabs';

const CensorPanel = ({ type }) => {
  return (
    <>
      <Box sx={{ px: 1 }}>
        <StatusTabs type={type} />
        <Box sx={{ pl: 3 }}>
          <DataTypeTabs type={type} />
        </Box>
      </Box>
      <Box sx={{ height: 600, p: 1, width: '100%' }}>
        <CensorGrid type={type} />
      </Box>
    </>
  );
};

CensorPanel.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CensorPanel;
