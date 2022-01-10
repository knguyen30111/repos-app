import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={0}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography align="center">Whoops!! 404 Not Found</Typography>
        <Grid item xs={12} md={3} sx={{ margin: '40px auto' }}>
          <Button variant="outlined" onClick={() => navigate('home')}>
            Go Back
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NoMatch;
