import * as React from 'react';
import { Box, Typography, Button, Stack, Paper, Grid, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll'
import lockedImg from '../locked.svg';
import unlockedImg from '../unlocked.svg';

const defaultTheme = createTheme();

// Default palette is what the user sees on first launch,
// and before they generate a palette. Default is grayscale.
const defaultPalette = [
    {
        "color": "#FFFFFF",
        "locked": false
    },
    {
        "color": "#A9A9A9",
        "locked": false
    },
    {
        "color": "#909090",
        "locked": false
    },
    {
        "color": "#686868",
        "locked": false
    },
    {
        "color": "#000000",
        "locked": false
    }
];

let palette = defaultPalette;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  export default function Palette() {
      
    const toggleLock = (index) => {
        console.log("clicked lock", index, palette[index]["locked"]);
        palette[index]["locked"] = !palette[index]["locked"];
        if (palette[index]["locked"]) {
            document.getElementById(index).src=lockedImg;
            console.log("lock", index)
        } else {
            document.getElementById(index).src=unlockedImg;
            console.log("unlock", index)
        }
    };

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
                {palette.map((item, index) => (
                    
                    <Item sx={{height: "20%", border: 0, borderRadius: 0}}>
                        <Button 
                        variant="contained"
                        style={{backgroundColor: item["color"], height:"100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <p style={{mixBlendMode: 'difference'}}>{item["color"]}</p>
                            
                            <div onClick={toggleLock.bind(this, index)} style={{maxWidth: '50px', margin: '10px 10px 10px 10px', cursor: 'pointer'}}>
                            {
                                item["locked"] ?
                                    <img id={String(index)} src={lockedImg}></img> 
                                    : <img id={String(index)} src={unlockedImg}></img>
                            }
                            </div>
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