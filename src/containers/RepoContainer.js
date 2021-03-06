
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Repo } from '../components/Repo';

export const RepoContainer = (props) => {
  const [repoData, setRepoData] = useState(null);

  const { repoOwner, repoName } = props;

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`).then(async (response) => {
      const repoData = await response.json();
      setRepoData(repoData);
    });
  }, []);

  return repoData ? <Repo repoData={repoData}/> : <h1>Fetching repo data...</h1>
}

RepoContainer.propTypes = {
    repoName: PropTypes.string.isRequired,
    repoOwner: PropTypes.string.isRequired
}