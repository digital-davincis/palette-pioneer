import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { color } from '@mui/system';
import ColorPicker from 'material-ui-color-picker'
import { Link } from 'react-scroll'

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Inputs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <section id="inputs">
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh'}} elevation={0}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} square style={{backgroundColor: '#faf9f7'}}>
          
          <Box
            sx={{
              my: 30,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h4" variant="h4" style={{color: "#04baf7", fontFamily: 'sans-serif', fontWeight: 'bold'}}>
                Manually Create a Palette
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                sx={{color: "#04baf7"}}
                margin="normal"
                required
                fullWidth
                id="phrase"
                label="What Vibe are you looking for?"
                name="phrase"
                autoComplete="phrase"
                autoFocus
                color="secondary"
              />
              <Typography component="h10" variant="h10" className='' sx={{display:"flex", flexDirection:"row", justifyContent:"center"}} style={{color: "#4f0128"}}>
                  or
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="hexVal"
                label="Enter a Hex Value"
                type="hexVal"
                id="hexVal"
                color="secondary"
                
              />
              <ColorPicker
                name='color'
                defaultValue='#000'
                // value={this.state.color} - for controlled component
                onChange={color => console.log(color)}
              />
              <Link
                to="palette" 
                spy={true} 
                smooth={true} 
                duration={500}>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style = {{backgroundColor: "#781e67"}}
                >
                    GENERATE
                </Button>
            </Link>
            </Box>
          </Box>
          
        </Grid>
        
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper} 
          square
          style={{backgroundColor: '#faf9f7'}}
        >
           <Box
            sx={{
              my: 30,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow:"none",
            }}
          >
            <Typography component="h4" variant="h4" style={{color: "#04baf7", fontFamily: 'sans-serif', fontWeight: 'bold'}}>
                  ...or Generate a Random Palette
              </Typography>
            <Box
                sx={{
                  my: 14,
                  mx: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  
                }}
               
              >
            
            <Link
            to="palette" 
            spy={true} 
            smooth={true} 
            duration={500}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor: "#781e67", padding:'20px'}}
              >
                GENERATE RANDOM PALETTE
              </Button>
            </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </section>
  );
}