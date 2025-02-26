import { AssignmentIndTwoTone, DocumentScannerTwoTone, KeyboardArrowDownTwoTone } from '@mui/icons-material';
import { alpha, Avatar, Box, Button, lighten, Menu, MenuItem, styled, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    color: ${theme.colors.primary.main};
    margin-right: ${theme.spacing(2)};
    background: ${theme.palette.mode === 'dark' ? theme.colors.alpha.trueWhite[10] : theme.colors.alpha.white[50]};
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0 1px 0 ${alpha(lighten(theme.colors.primary.main, 0.8), 0.2)},
         0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)`
        : `0px 2px 4px -3px ${alpha(theme.colors.alpha.black[100], 0.4)},
         0px 5px 16px -4px ${alpha(theme.colors.alpha.black[100], 0.2)}`
    };
  `,
);

const PageHeader = () => {
  const { t } = useTranslation();

  const periods = [
    {
      text: t('Today'),
      value: 'today',
    },
    {
      text: t('Yesterday'),
      value: 'yesterday',
    },
    {
      text: t('Last month'),
      value: 'last_month',
    },
    {
      text: t('Last year'),
      value: 'last_year',
    },
  ];

  const [openPeriod, setOpenMenuPeriod] = useState(false);
  const [period, setPeriod] = useState(periods[3].text);
  const actionRef1 = useRef(null);

  return (
    <Box
      alignItems={{ md: 'center', xs: 'stretch' }}
      display="flex"
      flexDirection={{ md: 'row', xs: 'column' }}
      justifyContent="space-between"
    >
      <Box alignItems="center" display="flex">
        <AvatarPageTitle variant="rounded">
          <AssignmentIndTwoTone fontSize="large" />
        </AvatarPageTitle>
        <Box>
          <Typography gutterBottom component="h3" variant="h3">
            {t('Outgoing')}
          </Typography>
          <Typography variant="subtitle2">{t('Manage outgoing data')}</Typography>
        </Box>
      </Box>
      <Box mt={{ md: 0, xs: 3 }}>
        <Button
          endIcon={<KeyboardArrowDownTwoTone fontSize="small" />}
          ref={actionRef1}
          variant="outlined"
          sx={{
            mr: 1,
          }}
          onClick={() => setOpenMenuPeriod(true)}
        >
          {period}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          open={openPeriod}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          onClose={() => setOpenMenuPeriod(false)}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period.text);
                setOpenMenuPeriod(false);
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>

        <Button startIcon={<DocumentScannerTwoTone />} variant="contained">
          {t('Export')}
        </Button>
      </Box>
    </Box>
  );
};

export default PageHeader;
