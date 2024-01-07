import * as React from 'react';
import { Box, Typography, Button, Stack, Paper, Grid, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const defaultTheme = createTheme();

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
    <Grid container component="main" sx={{ height: '100vh' }} style={{backgroundColor: '#faf9f7'}}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={7} component={Paper} square style={{backgroundColor: '#faf9f7'}}>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={0}
                sx={{height:"100%", border: 0, borderColor: "red"}}
                // item: { display: "flex", flexDirection: "column" }
            >
                {[1, 2, 3, 4, 5].map((value) => (
                    
                    <Item sx={{height: "20%", border: 0}}>Item {value}</Item>

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

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                    style = {{backgroundColor: "#781e67", padding:'20px'}}
                >
                GENERATE NEW PALETTE
              </Button>
            </Box>
          </Box>
        </Grid>
    </Grid>
    </ThemeProvider>
    </section>
  );
}