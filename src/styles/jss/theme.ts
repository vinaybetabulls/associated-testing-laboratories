import createTheme, { Theme } from '@material-ui/core/styles/createTheme'
// import { Typography, TypographyStyle, Variant } from '@material-ui/core/styles/createTypography'
import { Overrides } from '@material-ui/core/styles/overrides'
// import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { link } from './utils'
import { fontWeights, spacing } from './variable'

const noSpacing = {
  margin: 0,
  padding: 0,
}

const breakpoints = {
  values: {
    xs: 480,
    sm: 720,
    md: 1024,
    lg: 1280,
    xl: 1672, // 1608px content with 32px margins
  },
}

const overrides = (theme: {}): Overrides => ({
  MuiCssBaseline: {
    '@global': {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        color: '#333333',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
        ...noSpacing,
      },
      ul: {
        listStyle: 'none',
        ...noSpacing,
      },
      ol: {
        listStyle: 'none',
        ...noSpacing,
      },
      li: {
        display: 'block',
        ...noSpacing,
      },
      dl: {
        ...noSpacing,
      },
      dd: {
        ...noSpacing,
      },
      button: {
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
      },
      h1: {},
      h2: {
        fontWeight: fontWeights.medium,
      },
      h3: {
        fontWeight: fontWeights.medium,
      },
      p: {
        // removing browser default margins and adding defaults for content
        padding: 0,
        // ...theme.typography.medium_regular,
        // ...theme.typographySpacing.medium_regular_sm,
      },
      mark: {
        color: '',
        backgroundColor: 'inherit',
      },
      select: {
        '-webkit-appearance': 'none',
        cursor: 'pointer',
      },
      textarea: {
        fontSize: 16,
        border: 'none',
        overflow: 'auto',
        outline: 'none',
        '-webkit-box-shadow': 'none',
        '-moz-box-shadow': 'none',
        boxShadow: 'none',
        resize: 'none',
        backgroundColor: 'inherit',
        padding: 0,
      },
      main: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
      '.content': {
        '& > :last-child': {
          marginBottom: '0px',
        },
        '& ul': {
          listStyleType: 'disc',
        },
        '& ol': {
          listStyleType: 'decimal',
          '& > li::marker': {
            content: 'counter(list-item)"  "',
          },
        },
        '& ul, & ol': {
          //   ...theme.typographySpacing.medium_regular_sm,
          margin: 'initial',
          paddingInlineStart: '2em',
        },
        '& ul > li, & ol > li': {
          //   ...theme.typography.medium_regular,
          //   ...theme.typographySpacing.none,
          display: 'list-item',
          listStyle: 'outside',
        },
        '& a': {
          ...link(undefined),
        },
      },
    },
  },
  MuiTextField: {
    root: {
      margin: 0,
      width: '100%',
    },
  },
  MuiInput: {
    root: {
      padding: '0',
      margin: '0!important',
      position: 'initial',
    },
    input: {
      padding: '0',
      '&::placeholder': {
        color: '',
        opacity: 1,
      },
    },
  },
  MuiFormControlLabel: {
    root: {
      margin: '0!important',
    },
    label: {
      //   ...theme.typography.small_regular,
      marginBottom: '2px',
      '&$disabled': {
        color: '',
      },
    },
  },
  MuiRadio: { colorSecondary: { '&$checked': { '&:hover': { backgroundColor: 'inherit' } } } },
  MuiCheckbox: { colorSecondary: { '&$checked': { '&:hover': { backgroundColor: 'inherit' } } } },
  //@ts-ignore
  MuiFabRoot: {
    backgroundColor: '',
  },
  PrivateSwitchBase: { root: { padding: spacing.xs } },
})

// interface SiteTypography extends Typography, Record<Variant | keyof typeof typographyGotham, TypographyStyle> {}
// interface SiteTypographySpacing extends Record<keyof typeof typographySpacing, CSSProperties> {}
// interface SiteStatusColors
//   extends Record<keyof typeof statusColorsInterflora, { dark: string; base: string; light: string }> {}

// export interface SiteTheme extends Theme {
//   typography: SiteTypography
//   typographySpacing: SiteTypographySpacing
//   statusColors: SiteStatusColors
// }

const createSiteTheme = () => {
  //   const typographyBase =  typographyGothamBase
  //   const typography = isFlyingFlowers ? typographyMontserrat : typographyGotham
  const baseTheme = createTheme({
    breakpoints,
    // typography: { ...typographyBase, ...typography },
    overrides: overrides({}),
  })
  //   baseTheme
  return {
    ...baseTheme,
    // typographySpacing,
    // statusColors: isFlyingFlowers ? statusColorsFlyingFlowers : statusColorsInterflora,
    // isFlyingFlowers: !!isFlyingFlowers,
  }
}

export default createSiteTheme
