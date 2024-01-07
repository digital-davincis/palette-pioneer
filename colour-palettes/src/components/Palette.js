import * as React from 'react';
import { Box, Typography, Button, Stack, Paper, Grid, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll'

const defaultTheme = createTheme();

// Default palette is what the user sees on first launch,
// and before they generate a palette. Default is grayscale.
const defaultPalette = ["#FFFFFF", 
                        "#A9A9A9", 
                        "#808080", 
                        "#686868", 
                        "#000000"];

const palette = defaultPalette;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Palette() {

  return (
    <section id='palette'>
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={7} component={Paper} square>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={0}
                sx={{height:"100%", border: 0, borderColor: "red"}}
                // item: { display: "flex", flexDirection: "column" }
                
            >
                {palette.map((value) => (
                    
                    <Item sx={{height: "20%", border: 0, borderRadius: 0}}>
                        <Button 
                        variant="contained"
                        style={{backgroundColor: value, height:"100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <p style={{mixBlendMode: 'difference'}}>{value}</p>
                        </Button>
                    </Item>

                ))}
            </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper} 
          square
          style={{backgroundColor: '#faf9f7'}}
        >
            <Box
            sx={{
                mx: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Box
                    sx={{
                    mt: "40%",
                    mx: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt:2, mb: 2 }}
                    style = {{backgroundColor: "#781e67", padding:'20px'}}
                >
                    REGENERATE WITH LOCKED COLORS
                </Button>
                </Box>

                <Box
                    sx={{
                    mb: "40%",
                    mx: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                <Link
                to="inputs" 
                spy={true} 
                smooth={true} 
                duration={500}>
                 <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    style = {{backgroundColor: "#781e67", padding:'20px'}}
                    >
                    GENERATE NEW PALETTE
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