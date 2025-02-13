import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import {
  alpha,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../../../../components/Text';
import internationalization from '../../../../../i18n/i18n';

const SectionHeading = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
        padding: ${theme.spacing(2, 2, 0)};
`,
);

const IconButtonPrimary = styled(IconButton)(
  ({ theme }) => `
    margin-left: ${theme.spacing(1)};
    background: ${theme.colors.alpha.trueWhite[10]};
    color: ${theme.colors.alpha.trueWhite[70]};
    padding: 0;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    transition: ${theme.transitions.create(['background', 'color'])};

    &.active,
    &:active,
    &:hover {
      background: ${alpha(theme.colors.alpha.trueWhite[30], 0.2)};
      color: ${theme.colors.alpha.trueWhite[100]};
    }
`,
);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const getLanguage = i18n.language;

  const switchLanguage = ({ lng }) => {
    internationalization.changeLanguage(lng);
  };
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title={t('Language Switcher')}>
        <IconButtonPrimary color="primary" ref={ref} onClick={handleOpen}>
          {getLanguage === 'de' && <p>de</p>}
          {getLanguage === 'en' && <p>us</p>}
          {getLanguage === 'en-US' && <p>us</p>}
          {getLanguage === 'en-GB' && <p>us</p>}
          {getLanguage === 'es' && <p>es</p>}
          {getLanguage === 'fr' && <p>fr</p>}
          {getLanguage === 'cn' && <p>cn</p>}
          {getLanguage === 'ae' && <p>ae</p>}
        </IconButtonPrimary>
      </Tooltip>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        open={isOpen}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        onClose={handleClose}
      >
        <Box
          sx={{
            maxWidth: 240,
          }}
        >
          <SectionHeading color="text.primary" variant="body2">
            {t('Language Switcher')}
          </SectionHeading>
          <List
            component="nav"
            sx={{
              p: 2,
            }}
          >
            <ListItem
              button
              className={getLanguage === 'en' || getLanguage === 'en-US' ? 'active' : ''}
              onClick={() => {
                switchLanguage({ lng: 'en' });
                handleClose();
              }}
            >
              <ListItemText
                primary="English"
                sx={{
                  pl: 1,
                }}
              />
            </ListItem>
            <ListItem
              button
              className={getLanguage === 'de' ? 'active' : ''}
              onClick={() => {
                switchLanguage({ lng: 'de' });
                handleClose();
              }}
            >
              <ListItemText
                primary="German"
                sx={{
                  pl: 1,
                }}
              />
            </ListItem>
            <ListItem
              button
              className={getLanguage === 'es' ? 'active' : ''}
              onClick={() => {
                switchLanguage({ lng: 'es' });
                handleClose();
              }}
            >
              <ListItemText
                primary="Spanish"
                sx={{
                  pl: 1,
                }}
              />
            </ListItem>
            <ListItem
              button
              className={getLanguage === 'fr' ? 'active' : ''}
              onClick={() => {
                switchLanguage({ lng: 'fr' });
                handleClose();
              }}
            >
              <ListItemText
                primary="French"
                sx={{
                  pl: 1,
                }}
              />
            </ListItem>
            <ListItem
              button
              className={getLanguage === 'cn' ? 'active' : ''}
              onClick={() => {
                switchLanguage({ lng: 'cn' });
                handleClose();
              }}
            >
              <ListItemText
                primary="Chinese"
                sx={{
                  pl: 1,
                }}
              />
            </ListItem>
            <ListItem
              button
              className={getLanguage === 'ae' ? 'active' : ''}
              onClick={() => {
                switchLanguage({ lng: 'ae' });
                handleClose();
              }}
            >
              <ListItemText
                primary="Arabic"
                sx={{
                  pl: 1,
                }}
              />
            </ListItem>
          </List>
          <Divider />
          <Text color="warning">
            <Box
              p={2}
              sx={{
                maxWidth: 340,
              }}
            >
              <WarningTwoToneIcon fontSize="small" />
              <Typography variant="body1">
                {t('We only translated a small part of the template, for demonstration purposes')}!
              </Typography>
            </Box>
          </Text>
        </Box>
      </Popover>
    </>
  );
};

export default LanguageSwitcher;
