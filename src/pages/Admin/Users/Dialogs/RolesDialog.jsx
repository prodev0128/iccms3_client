import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { RichTreeViewPro, useTreeViewApiRef } from '@mui/x-tree-view-pro';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import { userRoles, userRolesArray } from '../../../../globals/constants';
import { getUserRolesCategories } from '../../../../globals/utils';

const RolesDialog = ({ onClose, open, payload }) => {
  const [data, setData] = useState([]);
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);

  const [selection, setSelection] = useState(payload.data || []);
  const [expandedItems, setExpandedItems] = useState(getUserRolesCategories() || []);

  const apiRef = useTreeViewApiRef();

  useEffect(() => {
    setData(selection.filter((item) => Object.values(userRoles).find((role) => role === item)));
  }, [selection]);

  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);
  };

  const handleNodeClick = (event, nodeId) => {
    apiRef.current.selectItem(event, nodeId);
  };

  const handleSelectedItemsChange = (event, selectedItems) => {
    setConfirmWithoutSaving(true);
    setSelection(selectedItems);
  };

  const title = useMemo(() => `${payload.type} Roles`, [payload]);

  return (
    <CustomDialog draggable confirmWithoutSaving={confirmWithoutSaving} open={open} onClose={onClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <RichTreeViewPro
          checkboxSelection
          disableSelectionOnClick
          multiSelect
          apiRef={apiRef}
          expandedItems={expandedItems}
          items={userRolesArray}
          onExpandedItemsChange={handleExpandedItemsChange}
          onNodeClick={handleNodeClick}
          onSelectedItemsChange={handleSelectedItemsChange}
        />
        <div className="mt-4">
          <strong>Selected Permissions:</strong> {JSON.stringify(data)}
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
