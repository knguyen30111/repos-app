import { Typography, Button, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Repository } from '../typings/services/response';

type Props = {
  repository?: Repository;
};

const SingleRepo: React.FC<Props> = ({ repository }) => {
  const { name, node_id: nodeId } = repository || {};
  return (
    <Box
      component="div"
      key={nodeId}
      sx={{
        marginTop: '12px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        alignContent: 'center',
      }}
    >
      <Typography
        sx={{
          lineHeight: 2.5,
        }}
      >
        {name}
      </Typography>
      <Button component={Link} to={`/home/${name}`} variant="contained">
        Go To ReadMe
      </Button>
    </Box>
  );
};

export default SingleRepo;
