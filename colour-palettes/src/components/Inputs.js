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
import { useState } from 'react';
import { Link } from 'react-scroll'
import Palette from './Palette';
//import { getPaletteFromText, getPaletteFromColor, getRandomPalette } from '../backend.js';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Inputs({ onChangePalette }) {

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

  const handlePhraseSubmit = async () => {
    const phrase = document.getElementById('phrase').value;
    console.log(phrase);
    if (phrase) {
      try {
        const response = await fetch('https://palette-pioneer-backend.onrender.com/text-palette', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ string: phrase })
        });
        if (response.ok) {
          const newPalette = await response.json();
          console.log(newPalette);
          onChangePalette(newPalette);
        } else {
          console.error('Server responded with an error');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const randomPalette = async () => {
    try {
      const response = await fetch('https://palette-pioneer-backend.onrender.com/random-palette');
      if (response.ok) {
        const newPalette = await response.json();
        onChangePalette(newPalette);
      } else {
        console.error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleHexSubmit = async () => {
    const hexVal = document.getElementById('hexVal').value;
    if (hexVal) {
      const rgbArray = hexToRgb(hexVal);
      console.log(rgbArray)
      await hexPalette(rgbArray);
    }
  };
  

  async function hexPalette(RGB_array) {
    try {
      const response = await fetch('https://palette-pioneer-backend.onrender.com/hex-palette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(RGB_array), // Send RGB_array in the request body
      });
      if (response.ok) {
        const newPalette = await response.json();
        console.log(newPalette);
        onChangePalette(newPalette);
      } else {
        console.error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  


  return (
    <section id="inputs">
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh'}} elevation={0}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} square style={{backgroundColor: '#faf9f7'}}>
          
          <Box
            sx={{
              my: 16,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            resize="none"
          >
            <Typography component="h4" variant="h4" style={{color: "#04baf7", fontFamily: 'sans-serif', fontWeight: 'bold'}}>
                Manually Create a Palette
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="phrase"
                label="What vibe are you going for?"
                id="phrase"
                color="secondary"
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
                    onClick={handlePhraseSubmit}
                >
                    Generate From Phrase
                </Button>
            </Link>
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
              ></TextField>
              
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style = {{backgroundColor: "white", padding:'8px'}}
              >
                <ColorPicker
                  name='color'
                  required
                  fullWidth
                  defaultValue='Pick a Colour'
                  value={color} // Controlled component
                  onChange={color => handleColorChange(color)}
                />
              </Button>

            
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
                    onClick={handleHexSubmit}
                >
                    Generate From Hex
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
              my: 20,
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
                onClick={randomPalette}
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
};


// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}