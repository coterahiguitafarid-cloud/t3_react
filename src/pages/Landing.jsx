import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AuthRole from '../components/AuthRole.jsx'

const models = [
  {
    name: 'Deportivas',
    detail: 'Ingeniería de precisión para sentir cada curva.',
    icon: '01',
  },
  {
    name: 'Naked',
    detail: 'Diseño puro, carácter urbano y libertad total.',
    icon: '02',
  },
  {
    name: 'Aventura',
    detail: 'Kilómetros por delante. Ningún camino fuera de alcance.',
    icon: '03',
  },
]

function Landing() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76, justifyContent: 'space-between' }}>
            <Typography variant="h6" fontWeight={900} letterSpacing={1.5}>
              MOTO
              <Box component="span" sx={{ color: 'primary.main' }}>
                RA
              </Box>
            </Typography>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Button
                color="inherit"
                href="#modelos"
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Modelos
              </Button>
              <Button
                href="#acceso"
                variant="outlined"
                color="inherit"
                sx={{ borderColor: 'rgba(255,255,255,0.45)' }}
              >
                Acceso
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        component="section"
        sx={{
          minHeight: { xs: 'auto', md: 720 },
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 13, md: 12 },
          pb: { xs: 8, md: 10 },
          backgroundImage:
            'linear-gradient(90deg, rgba(12,13,14,0.96) 0%, rgba(12,13,14,0.78) 48%, rgba(12,13,14,0.55) 100%), url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=85")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 6, md: 8 }}
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Stack spacing={3} sx={{ maxWidth: 620 }}>
              <Typography
                variant="overline"
                color="primary.light"
                fontWeight={800}
                letterSpacing={3}
              >
                Siente el camino
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', sm: '4rem', md: '5.25rem' },
                  fontWeight: 900,
                  lineHeight: 0.98,
                  letterSpacing: '-0.04em',
                }}
              >
                NO ES SOLO
                <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>
                  UNA MOTO.
                </Box>
                ES TU ELEMENTO.
              </Typography>
              <Typography variant="h6" color="grey.300" sx={{ maxWidth: 500, fontWeight: 400 }}>
                Explora máquinas de alto cilindraje creadas para quienes convierten cada ruta en
                una historia.
              </Typography>
              <Button
                href="#modelos"
                variant="contained"
                size="large"
                sx={{ alignSelf: 'flex-start', px: 3, py: 1.4 }}
              >
                Explorar modelos
              </Button>
            </Stack>
            <AuthRole />
          </Stack>
        </Container>
      </Box>

      <Container id="modelos" maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack spacing={1} sx={{ mb: 5 }}>
          <Typography variant="overline" color="primary.light" fontWeight={700} letterSpacing={2}>
            Encuentra tu estilo
          </Typography>
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}
          >
            Hechas para ir más allá.
          </Typography>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {models.map((model) => (
            <Card
              key={model.name}
              variant="outlined"
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                borderColor: 'rgba(255,255,255,0.1)',
                transition: 'border-color 180ms ease, transform 180ms ease',
                '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' },
              }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={2}>
                  <Typography
                    variant="h4"
                    color="primary.main"
                    fontWeight={900}
                    letterSpacing={1}
                  >
                    {model.icon}
                  </Typography>
                  <Typography variant="h5" fontWeight={700}>
                    {model.name}
                  </Typography>
                  <Typography color="text.secondary">{model.detail}</Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', py: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">
            © 2026 Motora — Vive la ruta a tu manera.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Landing
