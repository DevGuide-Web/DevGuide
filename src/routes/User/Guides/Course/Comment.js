import React from 'react';
import NavBar from '../../../NavBar/NavBar';
import './comment.css';

function Comment() {
  return (
    <>
      <NavBar />
      <div className='parentCommentDiv'>
        <div className='parentCommentDetail'>
          <div className='parentCommentComponent'>
            <div className='parentCommentHeader'>
              <h2>User</h2>
              <h4>Date</h4>
            </div>
            <div className='parentCommentContent'>
              <h3>Title</h3>
              <p className='parentCommentDesc'>Detail</p>
            </div>
          </div>
        </div>
      </div>
      <div className='childCommentDiv'>
        <div className='childCommentDetail'>
          <div className='replyDiv'>
            <div className='replyUser'>Reply as MosQyy</div>
            <div className='replyForm'>
              <textarea
                type='text'
                placeholder='Type Here!'
                className='inputReply'
              />
              <button className='replyButton'>Submit</button>
            </div>
          </div>
          <h1>All Replies</h1>
          <div className='childCommentComponent'>
            <div className='childCommentHeader'>
              <h2>User</h2>
              <h4>Date</h4>
            </div>
            <div className='childCommentContent'>
              <p className='childCommentDesc'>Detail</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
