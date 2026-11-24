import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Landing from './pages/Landing.jsx'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f4511e' },
    background: { default: '#101112', paper: '#191b1d' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: { borderRadius: 12 },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  )
}

export default App
