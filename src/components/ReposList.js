import React from 'react';

export const ReposList = (props) => {

  const handleClick = e => {
    props.onChoose(Number(e.target.dataset.repoid));
  }

  return (
    <div className="repos-list">
      {props.repos.map((repo) => (
        <div className="repo-item" key={repo.id}>
        <h3>
        {repo.name.toUpperCase()}
        </h3>
        <h3>
          Owner: {repo.owner.login}
        </h3>
        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
        <div>
          <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleClick} data-repoid={repo.id}>
            See details
          </button>
        </div>
      </div>
      ))}
    </div>
  );
}