import * as React from 'react';
import { List, ListItem, IconButton, ListItemText, Paper, Box, Grid, Typography, Button, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Palette() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square style={{backgroundColor: '#faf9f7'}}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[1, 2, 3, 4, 5].map((value) => (
                <ListItem
                key={value}
                disableGutters
                secondaryAction={
                    <IconButton aria-label="comment">
                    </IconButton>
                }
                >
                <ListItemText primary={`Line item ${value}`} />
                </ListItem>
            ))}
            </List>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
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