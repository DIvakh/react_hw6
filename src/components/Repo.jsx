import React, { memo, useEffect } from 'react';

const Repo = memo(({ items }) => {
  useEffect(() => {}, [items]);

  return (
    <ul className='popular-list'>
      {items.map((repo, index) => (
        <li key={repo.name} className='popular-item'>
          <span className='popular-rank'>#{index + 1}</span>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={'Avatar for ' + repo.owner.login}
              />
            </li>
            <li>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} start</li>
          </ul>
        </li>
      ))}
    </ul>
  );
});

export default Repo;
