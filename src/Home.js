import React from 'react';
import { ReposList } from './components/ReposList';

export const Home = (props) => {
  return (
    <div className="home">
      <h2>Repos list</h2>
      <ReposList
        repos={props.repos}
        onChoose={props.onChoose}
      />
    </div>
  );
}