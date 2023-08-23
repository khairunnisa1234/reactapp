import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchPosts } from '../services/api';
import { Post } from '../models/Post';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 },
];

const SecondPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Second Page</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={posts} columns={columns} pageSize={5} />
      </div>
    </div>
  );
};

export default SecondPage;
