import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { RichTreeViewPro, useTreeViewApiRef } from '@mui/x-tree-view-pro';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import { userRoles } from '../../../../globals/constants';
import { getAllCategoriesOfUserRoles } from '../../../../globals/utils';

const RolesDialog = ({ onClose, open, payload }) => {
  const [data, setData] = useState(payload.data || {});
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  console.log('selectedPermissions', selectedPermissions);

  const apiRef = useTreeViewApiRef();

  useEffect(() => {
    setExpandedItems(() => getAllCategoriesOfUserRoles());
  }, []);

  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);
  };

  const handleSelectionChange = (event, selectedItems) => {
    setSelectedPermissions(selectedItems);
  };

  const handleNodeClick = (event, nodeId) => {
    setSelectedPermissions((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(nodeId)) {
        newSelected.delete(nodeId);
      } else {
        newSelected.add(nodeId);
      }
      return Array.from(newSelected);
    });
  };

  const updateData = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const title = useMemo(() => `${payload.type} Roles`, [payload]);

  return (
    <CustomDialog draggable confirmWithoutSaving={confirmWithoutSaving} open={open} onClose={onClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <RichTreeViewPro
          checkboxSelection
          collapsed
          disableSelectionOnClick
          multiSelect
          apiRef={apiRef}
          expandedItems={expandedItems}
          items={userRoles}
          selectedItems={selectedPermissions}
          onExpandedItemsChange={handleExpandedItemsChange}
          onItemClick={handleNodeClick}
          onSelectedItemsChange={handleSelectionChange}
        />
        <div className="mt-4">
          <strong>Selected Permissions:</strong> {JSON.stringify(selectedPermissions)}
        </div>
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
