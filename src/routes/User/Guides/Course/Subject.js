import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../NavBar/NavBar';
import './course.css';
import {
  fetchComment,
  fetchSubject,
  fetchPostComment,
} from '../../../../redux';
import { connect } from 'react-redux';

function Subject({
  dataSubject,
  dataComment,
  dataPostComment,
  fetchPostComment,
  fetchSubject,
  fetchComment,
  userData,
  match,
}) {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [note, setNote] = useState(false);

  useEffect(() => {
    fetchSubject(match.params, userData.data.Authorization);
    fetchComment(match.params, userData.data.Authorization);
  }, []);

  const postComment = () => {
    if (!title || !detail) {
      return setNote(true);
    }
    window.location.reload()
    return fetchPostComment(
      match.params,
      userData.data.Authorization,
      title,
      detail
    );
  };

  return (
    <>
      <NavBar />
      <div className='courseDiv'>
        <div className='courseDetail'>
          <div className='courseTitle'>{dataSubject.data.title ? dataSubject.data.title : "Coming Soon"}</div>
          <div className='subDetailTitle'>{dataSubject.data.detail ? dataSubject.data.detail : "Coming Soon"}</div>
          <div className='subDetail'>
            {dataSubject.data.article_url && (
              <div className='articleDiv'>
                <h2>Article </h2>
                {Object.values(dataSubject.data.article_url).map(
                  (url, index) => (
                    <div className='articleDetail' key={index}>
                      {index + 1}. <a href={url[2]}>{url[0]}</a>
                    </div>
                  )
                )}
              </div>
            )}
            {dataSubject.data.video_url && (
              <div className='videoDiv'>
                <h2>Video Tutorial</h2>
                {Object.values(dataSubject.data.video_url).map((url, index) => (
                  <div className='videoDetail' key={index}>
                    {index + 1}. <a href={url[2]}>{url[0]}</a>
                  </div>
                ))}
              </div>
            )}
            {dataSubject.data.project_url && (
              <div className='sampleDiv'>
                <h2>Project / Sample Code </h2>
                {Object.values(dataSubject.data.project_url).map(
                  (url, index) => (
                    <div className='sampleDetail' key={index}>
                      {index + 1}. <a href={url[2]}>{url[0]}</a>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='discussDiv'>
        <div className='discussDetail'>
          <h1>Discussion</h1>
          <div className='discussComponent'>
            <div className='questionDiv'>
              <div className='questionControl'>
                <h3>Post your questions down below!</h3>
                <div className='questionForm'>
                {note && <h4>please fill the field below!</h4>}
                  <input
                    type='text'
                    placeholder='Title'
                    className='questionTitle'
                    onChange={event => {
                      setTitle(event.target.value);
                    }}
                  />
                  <textarea
                    type='text'
                    placeholder='Detail'
                    className='questionDetail'
                    onChange={event => {
                      setDetail(event.target.value);
                    }}
                  />
                  <div className='questionButtonControl'>
                    <button className='questionButton' onClick={postComment}>
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='commentDiv'>
              <div className='commentDetail'>
                <h1>All Comment</h1>
                {dataComment.data.length > 0 ? dataComment.data.map(comment => (
                  <div className='commentComponent' key={comment.id}>
                    <div className='commentHeader'>
                      <h2>by {comment.username}</h2>
                      <h4>Date : {comment.DateTime}</h4>
                    </div>
                    <div className='commentContent'>
                      <Link to={`/comment/${comment.id}`}>
                        <h3 className='commentTitle'>{comment.Title}</h3>
                      </Link>
                      <p className='commentDesc'>{comment.detail}</p>
                    </div>
                  </div>
                )): <div className='commentComponent'>
                <div className='commentContent'>
                    <h3 className='commentTitle'>There is no comment yet.</h3>
                </div>
              </div> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    dataSubject: state.subject,
    dataComment: state.comment,
    dataPostComment: state.postComment,
    userData: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSubject: (slug, headers) => dispatch(fetchSubject(slug, headers)),
    fetchComment: (slug, headers) => dispatch(fetchComment(slug, headers)),
    fetchPostComment: (slug, headers, title, detail) =>
      dispatch(fetchPostComment(slug, headers, title, detail)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
