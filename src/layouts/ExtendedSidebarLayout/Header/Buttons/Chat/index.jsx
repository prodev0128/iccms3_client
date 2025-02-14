import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import MarkChatReadTwoToneIcon from '@mui/icons-material/MarkChatReadTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Popover,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Scrollbar from '../../../../../components/Scrollbar';
import Text from '../../../../../components/Text';

const AvatarGradient = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.gradients.blue1};
      color: ${theme.colors.alpha.trueWhite[100]};
  `,
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`,
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};

    .MuiOutlinedInput-notchedOutline {
        border: 0;
    }
`,
);

const ListWrapper = styled(List)(
  () => `
    .MuiListItem-root:last-of-type + .MuiDivider-root {
        display: none;
    }
`,
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`,
);

const Chat = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const items = [
    {
      avatar: '/static/images/avatars/1.jpg',
      company: 'Trudoo',
      id: 1,
      jobtitle: 'Senior Cost Accountant',
      name: 'Munroe Dacks',
      value: 65,
    },
    {
      avatar: '/static/images/avatars/2.jpg',
      company: 'Buzzdog',
      id: 2,
      jobtitle: 'Associate Professor',
      name: 'Gunilla Canario',
      value: 76,
    },
    {
      avatar: '/static/images/avatars/3.jpg',
      company: 'Yozio',
      id: 3,
      jobtitle: 'Pharmacist',
      name: 'Rowena Geistmann',
      value: 54,
    },
    {
      avatar: '/static/images/avatars/4.jpg',
      company: 'Cogibox',
      id: 4,
      jobtitle: 'VP Product Management',
      name: 'Ede Stoving',
      value: 23,
    },
    {
      avatar: '/static/images/avatars/5.jpg',
      company: 'Babbleblab',
      id: 5,
      jobtitle: 'Social Worker',
      name: 'Crissy Spere',
      value: 16,
    },
  ];

  return (
    <>
      <Tooltip arrow title={t('Messenger')}>
        <Badge
          overlap="circular"
          variant="dot"
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          sx={{
            '.MuiBadge-badge': {
              background: theme.colors.error.main,
            },
          }}
        >
          <IconButtonWrapper
            color="warning"
            ref={ref}
            sx={{
              '&:hover': {
                background: alpha(theme.colors.warning.main, 0.2),
              },
              background: alpha(theme.colors.warning.main, 0.1),
              color: theme.colors.warning.main,

              transition: `${theme.transitions.create(['background'])}`,
            }}
            onClick={handleOpen}
          >
            <ForumTwoToneIcon fontSize="small" />
          </IconButtonWrapper>
        </Badge>
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
        <Box maxWidth={360} minWidth={360}>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-between"
            p={1}
            sx={{
              background: `${alpha(theme.colors.alpha.black[100], 0.07)}`,
            }}
          >
            <Button
              color="primary"
              size="small"
              startIcon={<MarkChatReadTwoToneIcon />}
              sx={{
                fontSize: theme.typography.pxToRem(12),
              }}
            >
              {t('Mark all as seen')}
            </Button>
            <Badge
              color="error"
              overlap="circular"
              variant="dot"
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
            >
              <AvatarGradient
                sx={{
                  fontSize: theme.typography.pxToRem(12),
                  fontWeight: 'normal',
                }}
              >
                ET
              </AvatarGradient>
            </Badge>
          </Box>
          <Divider />
          <Box>
            <FormControl fullWidth variant="outlined">
              <OutlinedInputWrapper
                placeholder={t('Search messages...')}
                type="text"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Divider />
          <Box
            sx={{
              height: 200,
            }}
          >
            <Scrollbar>
              <ListWrapper disablePadding>
                {items.map((item) => (
                  <Fragment key={item.id}>
                    <ListItem
                      secondaryAction={
                        <Button
                          color="secondary"
                          size="small"
                          variant="text"
                          sx={{
                            '&:hover': {
                              backgroundColor: `${theme.colors.secondary.main}`,
                              color: `${theme.palette.getContrastText(theme.colors.secondary.main)}`,
                            },
                            alignSelf: 'center',
                            backgroundColor: `${theme.colors.secondary.lighter}`,
                            fontSize: `${theme.typography.pxToRem(11)}`,
                            padding: `${theme.spacing(0.5, 1.5)}`,
                            textTransform: 'uppercase',
                          }}
                        >
                          {t('Chat')}
                        </Button>
                      }
                      sx={{
                        '&:hover': {
                          background: `${theme.colors.alpha.black[5]}`,
                        },
                        py: 1.5,
                      }}
                    >
                      <ListItemAvatar
                        sx={{
                          minWidth: 38,
                          mr: 1,
                        }}
                      >
                        <Avatar
                          alt={item.name}
                          src={item.avatar}
                          sx={{
                            height: 38,
                            width: 38,
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            color="text.primary"
                            variant="h5"
                            sx={{
                              pb: 0.6,
                            }}
                          >
                            {item.name}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Box alignItems="flex-start" display="flex">
                              <DotLegend
                                style={{
                                  background: `${theme.colors.success.main}`,
                                }}
                              />
                              <Typography
                                variant="body1"
                                sx={{
                                  fontSize: `${theme.typography.pxToRem(11)}`,
                                  lineHeight: 1,
                                }}
                              >
                                <Text color="success">{t('Online')}</Text>
                              </Typography>
                            </Box>
                          </>
                        }
                        sx={{
                          flexBasis: '50%',
                          flexGrow: 0,
                          maxWidth: '50%',
                        }}
                      />
                    </ListItem>
                    <Divider />
                  </Fragment>
                ))}
              </ListWrapper>
            </Scrollbar>
          </Box>
          <Divider />
          <Box
            p={2}
            sx={{
              background: `${theme.colors.alpha.black[5]}`,
              textAlign: 'center',
            }}
          >
            <Button color="primary" endIcon={<ArrowForwardTwoToneIcon />} size="small" variant="contained">
              {t('View all participants')}
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Chat;
