import { ContentPasteTwoTone, CopyAllTwoTone } from '@mui/icons-material';
import { Box, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { RichTreeViewPro, useTreeViewApiRef } from '@mui/x-tree-view-pro';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import Text from '../../../../components/Text';
import { roleObjectArray } from '../../../../globals/constants';
import { getRolesByData, getRolesById, getRolesCategories } from '../../../../globals/utils';

const RolesDialog = ({ onClose, open, payload }) => {
  const [data, setData] = useState(payload.data || []);
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);

  const [selectedItems, setSelectedItems] = useState();

  const apiRef = useTreeViewApiRef();

  useEffect(() => {
    const foundRoles = getRolesByData(data);
    setSelectedItems(foundRoles.concat(data));
  }, [data]);

  const handleItemSelectionToggle = (event, itemId, isSelected) => {
    setConfirmWithoutSaving(true);
    const foundRoles = getRolesById(itemId);
    if (isSelected) {
      setData((prevData) => [...new Set(prevData.concat(foundRoles))]);
    } else {
      setData((prevData) => prevData.filter((item) => !foundRoles.includes(item)));
    }
  };

  const handleCopy = () => {
    localStorage.setItem('roles', JSON.stringify(data));
  };

  const handlePaste = () => {
    setData(JSON.parse(localStorage.getItem('roles')));
  };

  const title = useMemo(() => `${payload.type} Roles`, [payload]);

  return (
    <CustomDialog draggable confirmWithoutSaving={confirmWithoutSaving} open={open} onClose={onClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            p: 1,
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button startIcon={<CopyAllTwoTone />} variant="contained" onClick={handleCopy}>
            Copy
          </Button>
          <Button startIcon={<ContentPasteTwoTone />} sx={{ ml: 1 }} variant="contained" onClick={handlePaste}>
            Paste
          </Button>
        </Box>
        <RichTreeViewPro
          checkboxSelection
          multiSelect
          apiRef={apiRef}
          defaultExpandedItems={getRolesCategories()}
          items={roleObjectArray}
          selectedItems={selectedItems}
          onItemSelectionToggle={handleItemSelectionToggle}
        />
        <Box sx={{ p: 1 }}>
          <Text>
            <b>{data.length} Selected Permissions</b>
          </Text>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={() => onClose(data)}>
          Save
        </Button>
        <Button color="secondary" variant="outlined" onClick={() => onClose()}>
          Cancel
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

RolesDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default RolesDialog;
