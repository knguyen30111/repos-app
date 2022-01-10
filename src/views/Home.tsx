import { TextField, InputAdornment, Button, Box, Container, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRepositories, setUserName } from '../redux/actions/github';
import { RootState } from '../typings/redux';
import { GithubState } from '../typings/redux/github';
import SingleRepo from '../components/SingleRepo';
import { Grid } from '@mui/material';

type Props = {
  fetchRepositories: typeof fetchRepositories;
  setUserName: typeof setUserName;
  github: GithubState;
};

const Home: React.FC<Props> = ({ fetchRepositories, setUserName, github: { userName, repos } }) => {
  function onChangeSearchTerm({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    setUserName(value);
  }

  async function onPressKeyboard(e: React.KeyboardEvent<HTMLImageElement>) {
    if (e.code === 'Enter' && userName) {
      fetchRepositories(userName);
    }
  }

  async function onClickSearchBtn() {
    if (userName) {
      fetchRepositories(userName);
    }
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              margin: '40px',
            }}
          >
            This is a getting repositories app
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            focused
            fullWidth
            label="User Name"
            variant="outlined"
            onChange={onChangeSearchTerm}
            onKeyDown={onPressKeyboard}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            helperText="Please fill the user name to search repositories"
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ margin: '0 auto' }}>
          <Button fullWidth variant="contained" onClick={onClickSearchBtn}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Box className="listRepos">
        <Typography align="center" variant="h6" sx={{ marginTop: '24px' }}>
          List of repositories
        </Typography>
        <Box>
          {repos.map((re) => (
            <SingleRepo repository={re} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default connect(
  (state: RootState) => ({
    github: state.github,
  }),
  { fetchRepositories, setUserName }
)(Home);
