
import React from 'react';
import PropTypes from 'prop-types';

export const Repo = (props) => {
    const { owner, name, html_url, forks, watchers, open_issues, language, pushed_at, size, updated_at } = props.repoData;

    return (
        <div className="repo-page">
        <h3>
        {name.toUpperCase()}
        </h3>
        <h3>
          Owner: {owner.login}
        </h3>
        <img src={owner.avatar_url} alt={owner.login} />
        <div>
          <a href={html_url} target="blank">Go to Repo on Github</a>
        </div>
        <div>
          <h4>Forks: {forks}</h4>
          <h4>Watchers: {watchers}</h4>
          <h4>Open issues: {open_issues}</h4>
          <h4>Language: {language}</h4>
          <h4>Pushed at: {pushed_at}</h4>
          <h4>Size: {size}</h4>
          <h4>Last update: {updated_at}</h4>
        </div>
      </div>
    )
}

Repo.propTypes = {
    repoData: PropTypes.object.isRequired,
}