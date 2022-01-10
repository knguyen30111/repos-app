import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import NoMatch from '../views/NoMatch';
import ReadMe from '../views/ReadMe';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:repoName" element={<ReadMe />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default Router;
