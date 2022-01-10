import { useParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import React, { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { getReadMeFile } from '../services/github';
import { connect } from 'react-redux';
import { RootState } from '../typings/redux';
import { GithubState } from '../typings/redux/github';
import { Button, Grid, Typography, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setUserName } from '../redux/actions/github';

type Props = {
  github: GithubState;
  setUserName: typeof setUserName;
};

const ReadMe: React.FC<Props> = ({ github: { userName } }) => {
  const navigate = useNavigate();
  const [source, setSource] = useState('');
  const { repoName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getReadMeFile(userName, repoName);
      if (response?.content) {
        const parsedContent: string = window.atob(response.content);
        setSource(parsedContent);
      }
    };
    fetchData();
  }, [repoName]);

  function goBack() {
    setUserName('');
    navigate(-1);
  }

  return (
    <div>
      {source ? (
        <>
          <MarkdownPreview source={source} />
          <Fab
            sx={{ position: 'fixed', bottom: '12px', left: '12px' }}
            color="primary"
            aria-label="add"
            onClick={goBack}
          >
            <ArrowBackIosNewIcon />
          </Fab>
        </>
      ) : (
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
            <Typography align="center">Whoops!! Read me file is not found</Typography>
            <Grid item xs={12} md={3} sx={{ margin: '40px auto' }}>
              <Button variant="outlined" onClick={goBack}>
                Go Back
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default connect(
  (state: RootState) => ({
    github: state.github,
  }),
  { setUserName }
)(ReadMe);
