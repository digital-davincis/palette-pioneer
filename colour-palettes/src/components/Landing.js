import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-scroll'

const defaultTheme = createTheme();

export default function Landing() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square style={{backgroundColor: '#faf9f7'}} grid= 'none'>
          <Box
            sx={{
              my: 18,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography component="h1" variant="h1" style={{ color: "#04baf7", fontFamily: 'sans-serif', fontWeight: 500 }} >
                Palette Pioneer
            </Typography>
            <Typography component="h6" variant="h6" align="center" style={{ color: "#4f0128", fontFamily: 'sans-serif' }} sx={{my:5, mx:10,}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla sapien ante, ut volutpat elit 
            interdum in. Phasellus quis nisl sed metus efficitur faucibus sit amet nec leo. Praesent eu odio at lacus 
            placerat consequat. Suspendisse id tellus tincidunt, vulputate neque eget, fermentum lorem. Vivamus porta 
            dictum nisi, quis finibus metus. Maecenas aliquam auctor enim maximus sagittis.
            </Typography>

            <Link
            to="inputs" 
            spy={true} 
            smooth={true} 
            duration={500}>
              <Button
                  type="submit"
                  style={{color:'white', backgroundColor:'#781e67', maxWidth: '300px', maxHeight: '100px', minWidth: '200px', minHeight: '50px'}}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Let's Get Started!
                </Button>
            </Link>
            
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}