import { useEffect, useState } from 'react';
import './App.css';
import { RepoContainer } from './containers/RepoContainer';
import { Home } from './Home';
import { reposConfig } from './config';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState();

  useEffect(() => {
    fetch(reposConfig.reposUrl).then(async (response) => {
      const newRepos = await response.json();
      setRepos(newRepos);
    });
  }, []);

  const handleChoose = (repoId) => {
    const chosenRepo = repos.find(repo => repo.id === repoId);
    setCurrentRepo(chosenRepo);
  }

  const handleReturnToDirectoryClick = () => {
    setCurrentRepo(null);
  }

  let body;
  if (currentRepo) {
    body = (
      <RepoContainer
        repoName={currentRepo.name}
        repoOwner={currentRepo.owner.login}
      />
    );
  } else {
    body = <Home onChoose={handleChoose} repos={repos}/>;
  }

  return (
    <div className="App">
      <header>
        <nav>
          {currentRepo && (
            <button onClick={handleReturnToDirectoryClick}>
              Return to home
            </button>
          )}
        </nav>
      </header>

      <main>{body}</main>
    </div>
  );
}

export default App;
