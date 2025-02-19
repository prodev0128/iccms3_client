import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  alpha,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Popover,
  styled,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import Link from '@mui/material/Link';
import { useRef, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router';

import Scrollbar from '../../../../../components/Scrollbar';
import Text from '../../../../../components/Text';

const BoxComposed = styled(Box)(
  () => `
  position: relative;
`,
);

const BoxComposedContent = styled(Box)(
  ({ theme }) => `
  position: relative;
  z-index: 7;

  .MuiTypography-root {
      color: ${theme.palette.primary.contrastText};

      & + .MuiTypography-root {
          color: ${alpha(theme.palette.primary.contrastText, 0.7)};
      }
  }
  
`,
);

const BoxComposedImage = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  filter: grayscale(80%);
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`,
);

const BoxComposedBg = styled(Box)(
  () => `
  position: absolute;
  left: 0;
  top: 0;
  z-index: 6;
  height: 100%;
  width: 100%;
  border-radius: inherit;
`,
);

const TabsWrapper = styled(Tabs)(
  ({ theme }) => `
      overflow: visible !important;

      .MuiTabs-scroller {
          overflow: visible !important;
      }

      .MuiButtonBase-root {
          text-transform: uppercase;
          font-size: ${theme.typography.pxToRem(12)};

          &:last-child {
            margin-right: 0;
          }
      }
  `,
);

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color: ${theme.colors.success.main};
      width: ${theme.spacing(10)};
      height: ${theme.spacing(10)};
      margin: 0 auto ${theme.spacing(2)};

      .MuiSvgIcon-root {
        font-size: ${theme.typography.pxToRem(42)};
      }
`,
);

const LabelPrimary = styled(Box)(
  ({ theme }) => `
    font-weight: bold;
    border-radius: ${theme.general.borderRadiusSm};
    background: ${theme.colors.primary.main};
    text-transform: uppercase;
    font-size: ${theme.typography.pxToRem(10)};
    padding: ${theme.spacing(0.5, 1.5)};
    color: ${theme.palette.primary.contrastText};
`,
);

const DividerVertialPrimary = styled(Box)(
  ({ theme }) => `
  height: 60%;
  width: 6px;
  left: -3px;
  border-radius: 50px;
  position: absolute;
  top: 20%;
  background: ${theme.colors.primary.main};
`,
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  border-radius: ${theme.general.borderRadiusLg};
`,
);

const HeaderNotifications = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState('timeline');

  const tabs = [
    { label: t('Timeline'), value: 'timeline' },
    { label: t('Tasks'), value: 'tasks' },
    { label: t('Reports'), value: 'reports' },
  ];

  const handleTabsChange = (_event, value) => {
    setCurrentTab(value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const chartOptions = {
    chart: {
      background: 'transparent',
      sparkline: {
        enabled: true,
      },
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.colors.secondary.light, theme.colors.secondary.dark],
    dataLabels: {
      enabled: true,
    },
    fill: {
      opacity: 1,
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter',
    ],
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '65%',
        horizontal: false,
      },
    },
    stroke: {
      colors: ['transparent'],
      show: false,
      width: 0,
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark',
    },
    tooltip: {
      fixed: {
        enabled: true,
      },
      marker: {
        show: true,
      },
      x: {
        show: true,
      },
    },
  };
  const chartData = [
    {
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2],
      name: 'Net Profit',
    },
    {
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2],
      name: 'Net Loss',
    },
  ];

  return (
    <>
      <Tooltip arrow title={t('Notifications')}>
        <Badge
          variant="dot"
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          sx={{
            '.MuiBadge-badge': {
              animation: 'pulse 1s infinite',
              background: theme.colors.success.main,
              transition: `${theme.transitions.create(['all'])}`,
            },
          }}
        >
          <IconButtonWrapper
            color="primary"
            ref={ref}
            sx={{
              '&:hover': {
                background: alpha(theme.colors.primary.main, 0.2),
              },
              background: alpha(theme.colors.primary.main, 0.1),
              color: theme.colors.primary.main,

              transition: `${theme.transitions.create(['background'])}`,
            }}
            onClick={handleOpen}
          >
            <NotificationsActiveTwoToneIcon fontSize="small" />
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
        <Box maxWidth={440} minWidth={440} p={2}>
          <BoxComposed
            mb={2}
            sx={{
              background: `${theme.colors.gradients.black1}`,
              borderRadius: `${theme.general.borderRadius}`,
            }}
          >
            <BoxComposedBg
              sx={{
                background: `${theme.colors.gradients.green2}`,
                opacity: 0.3,
              }}
            />
            <BoxComposedImage
              sx={{
                backgroundImage: 'url("/static/images/placeholders/covers/1.jpg")',
                opacity: 0.2,
              }}
            />
            <BoxComposedContent py={3}>
              <Typography
                textAlign="center"
                variant="h4"
                sx={{
                  pb: 0.5,
                }}
              >
                {t('Notifications')}
              </Typography>
              <Typography textAlign="center" variant="subtitle2">
                You have{' '}
                <Text color="success">
                  <b>483</b>
                </Text>{' '}
                new messages
              </Typography>
            </BoxComposedContent>
          </BoxComposed>
          <TabsWrapper
            centered
            indicatorColor="primary"
            textColor="primary"
            value={currentTab}
            variant="fullWidth"
            onChange={handleTabsChange}
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabsWrapper>
        </Box>
        <Divider />
        {currentTab === 'timeline' && (
          <Box
            sx={{
              height: 220,
            }}
          >
            <Scrollbar>
              <Timeline
                sx={{
                  m: 2,
                  px: 2,
                  py: 1,
                }}
              >
                <TimelineItem
                  sx={{
                    p: 0,
                  }}
                >
                  <TimelineSeparator
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <TimelineDot
                      color="success"
                      sx={{
                        left: `-${theme.spacing(2.1)} !important`,
                        marginTop: 0,
                        top: `-${theme.spacing(0.5)}`,
                      }}
                    >
                      <BusinessCenterTwoToneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      pb: 4,
                      pl: 3,
                    }}
                  >
                    <Typography gutterBottom variant="h5">
                      Java exam day
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      Bill Clinton&#39;s presidential scandal makes it online.
                    </Typography>
                    <Box alignItems="flex-start" display="flex" mt={1}>
                      <AvatarGroup max={4}>
                        <Tooltip arrow title="Remy Sharp">
                          <Avatar
                            alt="Remy Sharp"
                            component={RouterLink}
                            src="/static/images/avatars/1.jpg"
                            to="#"
                            sx={{
                              height: 32,
                              width: 32,
                            }}
                          />
                        </Tooltip>
                        <Tooltip arrow title="Travis Howard">
                          <Avatar
                            alt="Travis Howard"
                            component={RouterLink}
                            src="/static/images/avatars/2.jpg"
                            to="#"
                            sx={{
                              height: 32,
                              width: 32,
                            }}
                          />
                        </Tooltip>
                        <Tooltip arrow title="Cindy Baker">
                          <Avatar
                            alt="Cindy Baker"
                            component={RouterLink}
                            src="/static/images/avatars/3.jpg"
                            to="#"
                            sx={{
                              height: 32,
                              width: 32,
                            }}
                          />
                        </Tooltip>
                        <Tooltip arrow title="Cindy Baker">
                          <Avatar
                            alt="Cindy Baker"
                            component={RouterLink}
                            src="/static/images/avatars/4.jpg"
                            to="#"
                            sx={{
                              height: 32,
                              width: 32,
                            }}
                          />
                        </Tooltip>
                        <Tooltip arrow title="Agnes Walker">
                          <Avatar
                            alt="Agnes Walker"
                            component={RouterLink}
                            src="/static/images/avatars/5.jpg"
                            to="#"
                            sx={{
                              height: 32,
                              width: 32,
                            }}
                          />
                        </Tooltip>
                      </AvatarGroup>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem
                  sx={{
                    p: 0,
                  }}
                >
                  <TimelineSeparator
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <TimelineDot
                      color="primary"
                      sx={{
                        left: `-${theme.spacing(2.1)} !important`,
                        marginTop: 0,
                        top: `-${theme.spacing(0.5)}`,
                      }}
                    >
                      <AssignmentIndTwoToneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      pb: 4,
                      pl: 3,
                    }}
                  >
                    <Typography gutterBottom variant="h5">
                      Business investor meeting
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      Mosaic, the first graphical browser, is introduced to the average consumer.
                    </Typography>
                    <Box alignItems="flex-start" display="flex" mt={2}>
                      <Card
                        sx={{
                          mr: 2,
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            alt="..."
                            component="img"
                            height="64"
                            image="/static/images/placeholders/fitness/1.jpg"
                          />
                        </CardActionArea>
                      </Card>
                      <Card
                        sx={{
                          mr: 2,
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            alt="..."
                            component="img"
                            height="64"
                            image="/static/images/placeholders/fitness/2.jpg"
                          />
                        </CardActionArea>
                      </Card>
                      <Card
                        sx={{
                          mr: 2,
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            alt="..."
                            component="img"
                            height="64"
                            image="/static/images/placeholders/fitness/3.jpg"
                          />
                        </CardActionArea>
                      </Card>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem
                  sx={{
                    p: 0,
                  }}
                >
                  <TimelineSeparator
                    sx={{
                      position: 'relative',
                    }}
                  >
                    <TimelineDot
                      color="error"
                      variant="outlined"
                      sx={{
                        marginTop: 0,
                        top: theme.spacing(1.2),
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent
                    sx={{
                      pb: 4,
                      pl: 3,
                    }}
                  >
                    <Typography gutterBottom variant="h5">
                      Learning round table gathering
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      First ever iPod launches.
                    </Typography>
                    <Box alignItems="flex-start" display="flex" mt={1}>
                      <Button size="small" variant="contained">
                        {t('Submit report')}
                      </Button>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Scrollbar>
          </Box>
        )}
        {currentTab === 'tasks' && (
          <Box
            sx={{
              height: 220,
            }}
          >
            <Scrollbar>
              <Box p={3}>
                <Typography
                  component="div"
                  fontWeight="bold"
                  variant="caption"
                  sx={{
                    pb: 1,
                  }}
                >
                  {t('Tasks for today')}
                </Typography>
                <Card
                  variant="outlined"
                  sx={{
                    overflow: 'visible',
                    p: 2,
                    position: 'relative',
                  }}
                >
                  <DividerVertialPrimary />
                  <Link color="text.primary" component="a" fontWeight="normal" href="#" variant="h4">
                    Presentation site design
                  </Link>
                  <Box alignItems="center" display="flex" mt={1.5}>
                    <LabelPrimary>{t('On hold')}</LabelPrimary>
                    <Text flex color="error">
                      <AccessTimeTwoToneIcon
                        fontSize="small"
                        sx={{
                          ml: 1,
                          mr: 0.5,
                        }}
                      />
                      2:35 pm
                    </Text>
                  </Box>
                </Card>
                <Typography
                  component="div"
                  fontWeight="bold"
                  variant="caption"
                  sx={{
                    pb: 2,
                    pt: 3,
                  }}
                >
                  {t("Tomorrow's schedule")}
                </Typography>
                <Box
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  <AvatarSuccess>
                    <CheckTwoToneIcon />
                  </AvatarSuccess>
                  <Typography gutterBottom variant="h4">
                    {t('Nothing to report')}
                  </Typography>
                  <Typography variant="subtitle2">
                    {t("You don't have any other pending tasks in progress")}!
                  </Typography>
                </Box>
              </Box>
            </Scrollbar>
          </Box>
        )}
        {currentTab === 'reports' && (
          <Box
            sx={{
              height: 220,
            }}
          >
            <Box p={3}>
              <Box
                sx={{
                  textAlign: 'center',
                }}
              >
                <Typography gutterBottom variant="h4">
                  {t('Total Sales')}
                </Typography>
                <Typography variant="subtitle2">{t('Total sales performance for last week')}</Typography>
              </Box>
              <Chart height={146} options={chartOptions} series={chartData} type="bar" />
            </Box>
          </Box>
        )}
        <Divider />
        <Box
          p={2}
          sx={{
            textAlign: 'center',
          }}
        >
          <Button
            color="primary"
            endIcon={<ArrowForwardTwoToneIcon />}
            variant="contained"
            sx={{
              '&:active': {
                boxShadow: 'none',
              },
              '&:hover': {
                '.MuiSvgIcon-root': {
                  color: `${theme.palette.getContrastText(theme.colors.primary.dark)}`,
                },
                background: `${theme.colors.primary.main}`,
                boxShadow: `${theme.colors.shadows.primary}`,
                color: `${theme.palette.getContrastText(theme.colors.primary.dark)}`,

                px: 3,
              },
              '.MuiSvgIcon-root': {
                color: `${theme.colors.primary.main}`,
                transition: `${theme.transitions.create(['color'])}`,
              },
              background: 'transparent',
              border: `${theme.colors.primary.main} solid 2px`,
              borderRadius: 10,
              color: `${theme.colors.primary.main}`,
              fontWeight: 'normal',

              px: 2,

              py: 0.5,
              transition: `${theme.transitions.create(['all'])}`,
            }}
          >
            {t('View all')}
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default HeaderNotifications;
