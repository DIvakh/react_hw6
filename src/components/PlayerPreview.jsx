import React from 'react';

const PlayerPreview = ({ avatar, username, children }) => {
  return (
    <div className='user-cart'>
      <img
        src={avatar}
        className='avatar'
        alt='userPhoto'
        width='150'
        height='150'
      />
      <h2>{username}</h2>
      {children}
    </div>
  );
};

export default PlayerPreview;
