import { Typography, Button, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Repository } from '../typings/services/response';

type Props = {
  repository: Repository;
};

const SingleRepo: React.FC<Props> = ({ repository }) => {
  const { name, node_id: nodeId } = repository || {};
  return (
    <Box key={nodeId}>
      <Typography>{name}</Typography>
      <Button component={Link} to={`/home/${name}`}>
        Read Readme file
      </Button>
    </Box>
  );
};

export default SingleRepo;
