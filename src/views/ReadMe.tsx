import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useState } from 'react';
import { useEffect } from 'react';
import { getReadMeFile } from '../services/github';

const ReadMe: React.FC = () => {
  const [source, setSource] = useState('');
  const { repoName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getReadMeFile('ysmood', 'rod');
      const parsedContent: string = window.atob(response.content);
      setSource(parsedContent);
    };
    fetchData();
  }, [repoName]);

  return <div>{source && <MarkdownPreview source={source} />}</div>;
};

export default ReadMe;
