import '@mui/lab/themeAugmentation';

import { alpha, createTheme, darken } from '@mui/material';

const themeColors = {
  black: '#CBCCD2',
  error: '#FF1943',
  info: '#33C2FF',
  primary: '#44a574',
  primaryAlt: '#232a2e',
  secondary: '#a2a8ab',
  success: '#57CA22',
  trueWhite: '#ffffff',
  warning: '#FFA319',
  white: '#232a2e',
};

const colors = {
  alpha: {
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black,
    },
    trueWhite: {
      5: alpha(themeColors.trueWhite, 0.02),
      10: alpha(themeColors.trueWhite, 0.1),
      30: alpha(themeColors.trueWhite, 0.3),
      50: alpha(themeColors.trueWhite, 0.5),
      70: alpha(themeColors.trueWhite, 0.7),
      100: themeColors.trueWhite,
    },
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
  },
  error: {
    dark: darken(themeColors.error, 0.2),
    light: alpha(themeColors.error, 0.3),
    lighter: alpha(themeColors.error, 0.85),
    main: themeColors.error,
  },
  gradients: {
    black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
    black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
    blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
    blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
    blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
    green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
    green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
    orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
    orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
    orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
    pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
    purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
    purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  info: {
    dark: darken(themeColors.info, 0.2),
    light: alpha(themeColors.info, 0.3),
    lighter: alpha(themeColors.info, 0.85),
    main: themeColors.info,
  },
  layout: {
    general: {
      bodyBg: '#141c23',
    },
    sidebar: {
      background: themeColors.primaryAlt,
      dividerBg: '#303e47',
      menuItemBg: themeColors.primaryAlt,
      menuItemBgActive: themeColors.primary,
      menuItemColor: '#a1a7ab',
      menuItemColorActive: '#ffffff',
      menuItemHeadingColor: darken(themeColors.secondary, 0.3),
      menuItemIconColor: '#4a5d69',
      menuItemIconColorActive: '#ffffff',
      textColor: themeColors.secondary,
    },
  },
  primary: {
    dark: darken(themeColors.primary, 0.2),
    light: alpha(themeColors.primary, 0.3),
    lighter: alpha(themeColors.primary, 0.85),
    main: themeColors.primary,
  },
  secondary: {
    dark: darken(themeColors.secondary, 0.2),
    light: alpha(themeColors.secondary, 0.6),
    lighter: alpha(themeColors.secondary, 0.85),
    main: themeColors.secondary,
  },
  shadows: {
    card: '0px 0px 2px #757c82',
    cardLg:
      '0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%)',
    cardSm: '0px 0px 2px #757c82',
    error: '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
    info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
    primary: '0px 1px 4px rgba(112, 99, 192, 0.25), 0px 3px 12px 2px rgba(112, 99, 192, 0.35)',
    success: '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
    warning: '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
  },
  success: {
    dark: darken(themeColors.success, 0.2),
    light: alpha(themeColors.success, 0.3),
    lighter: alpha(themeColors.success, 0.85),
    main: themeColors.success,
  },
  warning: {
    dark: darken(themeColors.warning, 0.2),
    light: alpha(themeColors.warning, 0.3),
    lighter: alpha(themeColors.warning, 0.85),
    main: themeColors.warning,
  },
};

export const GreenFieldsTheme = createTheme({
  breakpoints: {
    values: {
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1840,
      xs: 0,
    },
  },
  // direction: i18n.dir(),
  colors: {
    alpha: {
      black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black,
      },
      trueWhite: {
        5: alpha(themeColors.trueWhite, 0.02),
        10: alpha(themeColors.trueWhite, 0.1),
        30: alpha(themeColors.trueWhite, 0.3),
        50: alpha(themeColors.trueWhite, 0.5),
        70: alpha(themeColors.trueWhite, 0.7),
        100: themeColors.trueWhite,
      },
      white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white,
      },
    },
    error: {
      dark: darken(themeColors.error, 0.2),
      light: alpha(themeColors.error, 0.3),
      lighter: alpha(themeColors.error, 0.1),
      main: themeColors.error,
    },
    gradients: {
      black1: colors.gradients.black1,
      black2: colors.gradients.black2,
      blue1: colors.gradients.blue1,
      blue2: colors.gradients.blue2,
      blue3: colors.gradients.blue3,
      blue4: colors.gradients.blue4,
      blue5: colors.gradients.blue5,
      green1: colors.gradients.green1,
      green2: colors.gradients.green2,
      orange1: colors.gradients.orange1,
      orange2: colors.gradients.orange2,
      orange3: colors.gradients.orange3,
      pink1: colors.gradients.pink1,
      pink2: colors.gradients.pink2,
      purple1: colors.gradients.purple1,
      purple3: colors.gradients.purple3,
    },
    info: {
      dark: darken(themeColors.info, 0.2),
      light: alpha(themeColors.info, 0.3),
      lighter: alpha(themeColors.info, 0.1),
      main: themeColors.info,
    },
    primary: {
      dark: darken(themeColors.primary, 0.2),
      light: alpha(themeColors.primary, 0.3),
      lighter: alpha(themeColors.primary, 0.1),
      main: themeColors.primary,
    },
    secondary: {
      dark: darken(themeColors.secondary, 0.2),
      light: alpha(themeColors.secondary, 0.3),
      lighter: alpha(themeColors.secondary, 0.1),
      main: themeColors.secondary,
    },
    shadows: {
      error: colors.shadows.error,
      info: colors.shadows.info,
      primary: colors.shadows.primary,
      success: colors.shadows.success,
      warning: colors.shadows.warning,
    },
    success: {
      dark: darken(themeColors.success, 0.2),
      light: alpha(themeColors.success, 0.3),
      lighter: alpha(themeColors.success, 0.1),
      main: themeColors.success,
    },
    warning: {
      dark: darken(themeColors.warning, 0.2),
      light: alpha(themeColors.warning, 0.3),
      lighter: alpha(themeColors.warning, 0.1),
      main: themeColors.warning,
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&.Mui-expanded': {
            margin: 0,
          },

          '&::before': {
            display: 'none',
          },
          boxShadow: 'none',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        action: {
          color: colors.alpha.black[70],
        },
        message: {
          fontSize: 14,
          lineHeight: 1.5,
        },
        standardInfo: {
          color: colors.info.main,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        clearIndicator: {
          '&:hover': {
            background: alpha(colors.error.lighter, 0.3),
          },
          background: alpha(colors.error.lighter, 0.2),
          color: colors.error.main,

          marginRight: 8,
        },
        popupIndicator: {
          '&:hover': {
            background: alpha(colors.primary.lighter, 0.2),
          },

          color: colors.alpha.black[70],
        },
        root: {
          '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
            right: 14,
          },
        },
        tag: {
          margin: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          background: colors.alpha.black[30],
          color: colors.alpha.trueWhite[100],
        },
        root: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          '&:first-of-type': {
            background: 'transparent',
            border: 0,
          },
          background: colors.alpha.black[10],
          color: colors.alpha.black[70],
          fontSize: 13,

          fontWeight: 'bold',
        },
        root: {
          alignItems: 'center',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          '&.MuiBackdrop-invisible': {
            backdropFilter: 'blur(2px)',
            backgroundColor: 'transparent',
          },
          backdropFilter: 'blur(2px)',

          backgroundColor: alpha(darken('#141c23', 0.5), 0.4),
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        containedSecondary: {
          backgroundColor: colors.secondary.main,
          border: `1px solid ${colors.alpha.black[30]}`,
          color: colors.alpha.white[100],
        },
        endIcon: {
          marginRight: -8,
        },
        outlinedSecondary: {
          '&:hover, &.MuiSelected': {
            backgroundColor: colors.alpha.black[5],
            color: colors.alpha.black[100],
          },

          backgroundColor: colors.alpha.white[100],
        },
        root: {
          '.MuiSvgIcon-root': {
            transition: 'all .2s',
          },
          fontWeight: 'bold',
          paddingLeft: 16,
          paddingRight: 16,

          textTransform: 'none',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeSmall: {
          lineHeight: 1.5,
          padding: '6px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginBottom: -5,
          marginTop: -5,
        },
        title: {
          fontSize: 15,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorSecondary: {
          '&:hover': {
            background: colors.alpha.black[10],
          },
          background: colors.alpha.black[5],

          color: colors.alpha.black[100],
        },
        deleteIcon: {
          '&:hover': {
            color: colors.alpha.black[70],
          },

          color: colors.alpha.black[50],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          background: colors.primary.lighter,
        },
        '#nprogress .peg': {
          boxShadow: `0 0 15px ${colors.primary.lighter}, 0 0 8px${colors.primary.light}`,
        },
        '#nprogress .spinner-icon': {
          borderLeftColor: colors.primary.lighter,
          borderTopColor: colors.primary.lighter,
        },
        '#root': {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
        '.child-popover .MuiPaper-root .MuiList-root': {
          flexDirection: 'column',
        },
        ':root': {
          '--swiper-theme-color': colors.primary.main,
          colorScheme: 'dark',
        },
        '@keyframes float': {
          '0%': {
            transform: 'translate(0%, 0%)',
          },
          '100%': {
            transform: 'translate(3%, 3%)',
          },
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(.75)',
          },
          '20%': {
            transform: 'scale(1.1)',
          },
          '40%': {
            transform: 'scale(.75)',
          },
          '60%': {
            transform: 'scale(1.05)',
          },
          '80%': {
            transform: 'scale(.75)',
          },
          '100%': {
            transform: 'scale(.75)',
          },
        },
        '@keyframes ripple': {
          '0%': {
            opacity: 1,
            transform: 'scale(.8)',
          },
          '100%': {
            opacity: 0,
            transform: 'scale(2.8)',
          },
        },
        body: {
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        code: {
          background: colors.info.lighter,
          borderRadius: 4,
          color: colors.alpha.black[100],
          padding: 4,
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          width: '100%',
        },
        'html, body': {
          height: '100%',
          width: '100%',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: darken(themeColors.primaryAlt, 0.5),
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: colors.alpha.black[10],
          border: 0,
          height: 1,
        },
        vertical: {
          '&.MuiDivider-absolute.MuiDivider-fullWidth': {
            height: '100%',
          },
          '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
            height: 'auto',
          },

          height: 'auto',
          width: 1,
        },
        withChildren: {
          '&:before, &:after': {
            border: 0,
          },
        },
        wrapper: {
          background: colors.alpha.white[100],
          color: 'inherit',
          fontWeight: 'bold',
          height: 24,
          lineHeight: '24px',
          marginTop: -12,
          textTransform: 'uppercase',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          marginLeft: 8,
          marginRight: 8,
          textTransform: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            borderRadius: 8,
          },
          borderRadius: 8,

          padding: 8,
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 6,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          '& .MuiListItem-button': {
            borderRadius: 6,
            margin: '1px 0',
          },

          padding: '12px',
        },
        root: {
          '& .MuiListItem-button': {
            '& .MuiTouchRipple-root': {
              opacity: 0.2,
            },

            '& > .MuiSvgIcon-root': {
              minWidth: 34,
            },

            transition: 'all .2s',
          },

          '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
            backgroundColor: colors.alpha.black[10],
          },
          '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
            opacity: 0.2,
          },
          '& .MuiMenuItem-root.MuiButtonBase-root:active': {
            backgroundColor: alpha(colors.primary.lighter, 0.2),
          },
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            '&:hover, &:active, &.active, &.Mui-selected': {
              background: alpha(colors.primary.lighter, 0.2),
              color: colors.alpha.black[100],
            },

            color: colors.secondary.main,
          },
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        alignItemsFlexStart: {
          marginTop: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            opacity: 0.3,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          background: colors.alpha.black[5],
          color: colors.alpha.black[70],
          fontSize: 13,
          fontWeight: 'bold',
          lineHeight: '40px',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          '& .MuiMenuItem-root.MuiButtonBase-root': {
            '& .MuiTouchRipple-root': {
              opacity: 0.2,
            },
            '&:hover, &:active, &.active, &.Mui-selected': {
              background: alpha(colors.primary.lighter, 0.2),
              color: colors.alpha.black[100],
            },
            color: colors.alpha.black[70],
            fontSize: 14,
            marginBottom: 1,

            marginTop: 1,

            transition: 'all .2s',
          },

          padding: 12,
        },
        paper: {
          padding: 12,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected:hover': {
            background: alpha(colors.primary.lighter, 0.2),
          },
          '&:hover, &:active, &.active, &.Mui-selected': {
            background: alpha(colors.primary.lighter, 0.2),
            color: colors.alpha.black[100],
          },

          background: 'transparent',
          transition: 'all .2s',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
            paddingRight: 6,
          },
          '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary.main,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.alpha.black[50],
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          fontSize: 13,
          fontWeight: 'bold',
          transition: 'all .2s',
        },
        textPrimary: {
          '&.Mui-selected': {
            boxShadow: colors.shadows.primary,
          },
          '&.Mui-selected.MuiButtonBase-root:hover': {
            background: colors.primary.main,
          },
          '&.MuiButtonBase-root:hover': {
            background: colors.alpha.black[5],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation: {
          boxShadow: colors.shadows.card,
        },
        elevation0: {
          boxShadow: 'none',
        },
        elevation2: {
          boxShadow: colors.shadows.cardSm,
        },
        elevation24: {
          boxShadow: colors.shadows.cardLg,
        },
        outlined: {
          boxShadow: colors.shadows.card,
        },
        root: {
          backgroundImage: 'none',
          padding: 0,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          top: 'calc(50% - 14px)',
        },
        iconOutlined: {
          color: colors.alpha.black[50],
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-valueLabel': {
            background: colors.alpha.black[100],
            borderRadius: 6,
            color: colors.alpha.white[100],
          },
          '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
            transform: 'none',
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.MuiStepIcon-completed': {
            color: colors.success.main,
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          background: colors.alpha.black[5],
          paddingBottom: 20,
          paddingTop: 20,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        colorPrimary: {
          '& .MuiSwitch-thumb': {
            backgroundColor: colors.alpha.white[100],
          },

          '&.Mui-checked .MuiSwitch-thumb': {
            backgroundColor: colors.primary.main,
          },
        },
        root: {
          '& .MuiButtonBase-root': {
            padding: 6,
            position: 'absolute',
            transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
          '& .MuiIconButton-root': {
            borderRadius: 100,
          },

          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            opacity: 0.3,
          },
          height: 33,
          overflow: 'visible',
        },
        thumb: {
          border: `1px solid ${colors.alpha.black[30]}`,
          boxShadow: `0px 9px 14px ${colors.alpha.black[10]}, 0px 2px 2px ${colors.alpha.black[10]}`,
        },
        track: {
          backgroundColor: colors.alpha.black[5],
          border: `1px solid ${colors.alpha.black[10]}`,
          boxShadow: `inset 0px 1px 1px ${colors.alpha.black[10]}`,
          opacity: 1,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected, &.Mui-selected:hover': {
            color: colors.alpha.trueWhite[100],
            zIndex: 5,
          },
          '&.MuiButtonBase-root': {
            marginRight: 4,
            minWidth: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
          },
          '&:hover': {
            color: colors.alpha.trueWhite[70],
          },
          borderRadius: 6,
          height: 38,
          minHeight: 38,

          padding: 0,
          textTransform: 'capitalize',
          transition: 'color .2s',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: colors.alpha.black[70],
          fontSize: 13,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
        root: {
          borderBottomColor: colors.alpha.black[10],
          fontSize: 14,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
        toolbar: {
          '& .MuiIconButton-root': {
            padding: 8,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: colors.alpha.black[5],
        },
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: alpha(colors.alpha.black[5], 0.05),
          },

          transition: 'background-color .2s',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          border: `1px solid ${colors.primary.dark}`,
          borderRadius: 6,
          boxShadow: `0px 2px 10px ${colors.primary.light}`,
          height: 38,
          minHeight: 38,
        },
        root: {
          height: 38,
          minHeight: 38,
          overflow: 'visible',
        },
        scrollableX: {
          overflow: 'visible !important',
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: colors.alpha.black[10],
          borderRadius: 50,
          height: '100%',
          position: 'absolute',
          top: 0,
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        outlined: {
          backgroundColor: colors.alpha.white[100],
          boxShadow: `0 0 0 6px ${colors.alpha.white[100]}`,
        },
        outlinedPrimary: {
          backgroundColor: colors.alpha.white[100],
          boxShadow: `0 0 0 6px ${colors.alpha.white[100]}`,
        },
        root: {
          left: -6,
          margin: 0,
          marginTop: -6,
          position: 'absolute',
          top: '50%',
          zIndex: 5,
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        missingOppositeContent: {
          '&:before': {
            display: 'none',
          },
        },
        root: {
          '&:before': {
            display: 'none',
          },
          minHeight: 0,

          padding: '8px 0',
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:hover, &.Mui-selected, &.Mui-selected:hover': {
            background: colors.primary.main,
            color: themeColors.trueWhite,
          },
          background: colors.alpha.white[100],
          color: colors.primary.main,

          transition: 'all .2s',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '0 !important',
          padding: '0 !important',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: alpha(colors.alpha.black['100'], 0.95),
        },
        tooltip: {
          backgroundColor: alpha(colors.alpha.black['100'], 0.95),
          fontSize: 13,
          padding: '8px 16px',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          body1: 'div',
          body2: 'div',
          h1: 'h1',
          h2: 'h2',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          subtitle1: 'div',
          subtitle2: 'div',
        },
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4,
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7,
        },
      },
    },
  },
  general: {
    borderRadius: '10px',
    borderRadiusLg: '12px',
    borderRadiusSm: '6px',
    borderRadiusXl: '16px',
    reactFrameworkColor: '#00D8FF',
  },
  header: {
    background: themeColors.primaryAlt,
    boxShadow: '0px 1px 0px #303e47',
    height: '80px',
    textColor: colors.secondary.main,
  },
  palette: {
    action: {
      activatedOpacity: 0.12,
      active: colors.alpha.black[100],
      disabled: colors.alpha.black[50],
      disabledBackground: colors.alpha.black[5],
      disabledOpacity: 0.38,
      focus: colors.alpha.black[10],
      focusOpacity: 0.05,
      hover: colors.primary.lighter,
      hoverOpacity: 0.1,
      selected: colors.alpha.black[10],
      selectedOpacity: 0.1,
    },
    background: {
      default: colors.layout.general.bodyBg,
      paper: colors.alpha.white[100],
    },
    common: {
      black: colors.alpha.black[100],
      white: colors.alpha.white[100],
    },
    error: {
      contrastText: themeColors.trueWhite,
      dark: colors.error.dark,
      light: colors.error.light,
      main: colors.error.main,
    },
    info: {
      contrastText: themeColors.trueWhite,
      dark: colors.info.dark,
      light: colors.info.light,
      main: colors.info.main,
    },
    mode: 'dark',
    primary: {
      dark: colors.primary.dark,
      light: colors.primary.light,
      main: colors.primary.main,
    },
    secondary: {
      dark: colors.secondary.dark,
      light: colors.secondary.light,
      main: colors.secondary.main,
    },
    success: {
      contrastText: themeColors.trueWhite,
      dark: colors.success.dark,
      light: colors.success.light,
      main: colors.success.main,
    },
    text: {
      disabled: colors.alpha.black[50],
      primary: colors.alpha.black[100],
      secondary: colors.alpha.black[70],
    },
    warning: {
      contrastText: themeColors.trueWhite,
      dark: colors.warning.dark,
      light: colors.warning.light,
      main: colors.warning.main,
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  shape: {
    borderRadius: 10,
  },
  sidebar: {
    background: colors.layout.sidebar.background,
    boxShadow: '1px 0 0 #303e47',
    dividerBg: colors.layout.sidebar.dividerBg,
    menuItemBg: colors.layout.sidebar.menuItemBg,
    menuItemBgActive: colors.layout.sidebar.menuItemBgActive,
    menuItemColor: colors.layout.sidebar.menuItemColor,
    menuItemColorActive: colors.layout.sidebar.menuItemColorActive,
    menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,
    menuItemIconColor: colors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,
    textColor: colors.layout.sidebar.textColor,
    width: '290px',
  },
  spacing: 9,
  typography: {
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      color: colors.alpha.black[50],
      fontSize: 13,
      textTransform: 'uppercase',
    },
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontSize: 35,
      fontWeight: 700,
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
    },
    h3: {
      color: colors.alpha.black[100],
      fontSize: 25,
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      fontSize: 14,
      fontWeight: 700,
    },
    h6: {
      fontSize: 15,
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    subtitle1: {
      color: colors.alpha.black[70],
      fontSize: 14,
    },
    subtitle2: {
      color: colors.alpha.black[50],
      fontSize: 15,
      fontWeight: 400,
    },
  },
});
