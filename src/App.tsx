import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core'
import Routing from './Routing'
import createSiteTheme from './styles/jss/theme'
function App() {
  const theme = createSiteTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  )
}

export default App
