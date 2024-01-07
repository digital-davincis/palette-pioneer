import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { color } from '@mui/system';
import ColorPicker from 'material-ui-color-picker'
import { useState } from 'react';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Inputs() {

  const [color, setColor] = useState('#000000');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      hexVal: data.get('hexVal'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
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
                style={{ width: '300px' }}
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
                type="text" // Changed type to text as hexVal is not a valid HTML input type
                id="hexVal"
                value={color} // Controlled component
                onChange={(e) => handleColorChange(e.target.value)}
                color="secondary"
              />
              
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor: "#781e67", padding:'20px'}}
              >
                <ColorPicker
                  name='color'
                  defaultValue='Pick A Colour'
                  value={color} // Controlled component
                  onChange={color => handleColorChange(color)}
                  
                />
              </Button>

              {/* <Typography component="h6" variant="h6" style={{ margin: '20px 0', color: '#4f0128' }}>
                Choose a Color
              </Typography>
              {/* <div style={{ width: '300px', height: '200px' }}>
                <ColorPicker
                  name='color'
                  defaultValue='#000'
                  onChange={color => console.log(color)}
                />
              </div> */}
              {/* <ColorPicker
                name='color'
                defaultValue='#000'
                // style={{ width: '300px'}}
                style={{ width: '100%' }}
                // value={this.state.color} - for controlled component
                onChange={color => console.log(color)}
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor: "#781e67"}}
              >
                GENERATE
              </Button>
              
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

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor: "#781e67", padding:'20px'}}
              >
                GENERATE RANDOM PALETTE
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}