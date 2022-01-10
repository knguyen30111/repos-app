import { TextField, InputAdornment, Button } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchRepositories } from '../redux/actions/github';
import { RootState } from '../typings/redux';
import { GithubState } from '../typings/redux/github';
import SingleRepo from '../components/Repository';

type Props = {
  fetchRepositories: typeof fetchRepositories;
  github: GithubState;
};

const Home: React.FC<Props> = ({ fetchRepositories, github }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  function onChangeSearchTerm({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(value);
  }

  async function onPressKeyboard(e: React.KeyboardEvent<HTMLImageElement>) {
    if (e.code === 'Enter' && searchTerm) {
      await fetchRepositories(searchTerm);
    }
  }

  async function onClickSearchBtn() {
    if (searchTerm) {
      await fetchRepositories(searchTerm);
    }
  }

  return (
    <>
      <TextField
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
      <Button variant="contained" onClick={onClickSearchBtn}>
        Search
      </Button>
      {github.repos.map((re) => (
        <SingleRepo key={re.name} repository={re} />
      ))}
    </>
  );
};

export default connect(
  (state: RootState) => ({
    github: state.github,
  }),
  { fetchRepositories }
)(Home);
