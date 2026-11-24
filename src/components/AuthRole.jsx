import { useState } from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

function AuthRole() {
  const [role, setRole] = useState('usuario')
  const [validatedRole, setValidatedRole] = useState('')

  const roleOptions = [
    { value: 'admin', label: 'Admin', icon: 'A' },
    { value: 'usuario', label: 'Usuario', icon: 'U' },
  ]

  return (
    <Card
      id="acceso"
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 430,
        bgcolor: 'rgba(25, 27, 29, 0.96)',
        border: '1px solid',
        borderColor: 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Stack spacing={2.5}>
          <Box>
            <Typography variant="overline" color="primary.light" fontWeight={700}>
              Acceso exclusivo
            </Typography>
            <Typography variant="h5" fontWeight={800}>
              Tu próxima ruta empieza aquí
            </Typography>
          </Box>

          {validatedRole ? (
            <Stack spacing={2}>
              <Alert severity={validatedRole === 'admin' ? 'warning' : 'success'}>
                {validatedRole === 'admin'
                  ? 'Acceso validado: panel de administración.'
                  : 'Acceso validado: bienvenido a la comunidad Motora.'}
              </Alert>
              <Typography color="text.secondary">
                {validatedRole === 'admin'
                  ? 'Desde aquí puedes gestionar modelos, novedades y experiencias.'
                  : 'Descubre modelos, encuentra tu próxima moto y sal a rodar.'}
              </Typography>
              <Button variant="outlined" onClick={() => setValidatedRole('')}>
                Cambiar de rol
              </Button>
            </Stack>
          ) : (
            <Stack
              component="form"
              spacing={2.5}
              onSubmit={(event) => {
                event.preventDefault()
                setValidatedRole(role)
              }}
            >
              <FormControl>
                <FormLabel id="role-label" sx={{ mb: 1 }}>
                  Selecciona tu tipo de acceso
                </FormLabel>
                <RadioGroup
                  aria-labelledby="role-label"
                  name="role"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                >
                  {roleOptions.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      value={option.value}
                      control={<Radio />}
                      label={
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography
                            component="span"
                            variant="caption"
                            sx={{
                              width: 24,
                              height: 24,
                              display: 'grid',
                              placeItems: 'center',
                              borderRadius: '50%',
                              bgcolor: 'action.selected',
                              fontWeight: 700,
                            }}
                          >
                            {option.icon}
                          </Typography>
                          <Typography>{option.label}</Typography>
                        </Stack>
                      }
                      sx={{
                        mx: 0,
                        px: 1,
                        border: '1px solid',
                        borderColor: role === option.value ? 'primary.main' : 'divider',
                        borderRadius: 2,
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <Button type="submit" variant="contained" size="large">
                Continuar como {role}
              </Button>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
              >
                Elige un rol para ver tu espacio personalizado.
              </Typography>
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default AuthRole
