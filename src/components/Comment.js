import React from 'react'

function Comment() {
  return (
    <div className='comment'>
      <div className='comment__header'>
        <p>avatar</p>
        <p>username</p>
        <p>badge if you == true</p>
        <p>date posted</p>
      </div>

      <div className='comment__body'>
        <p>comment</p>
      </div>

      <div className='comment__footer'>
        <div className='comment__footer--likes'>
          <p>likes</p>
        </div>
        <div className='comment__footer--icons'>
          <p>delete icon</p>
          <p>edit icon</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
