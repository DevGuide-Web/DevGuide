import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../../NavBar/NavBar";
import "./course.css";
import {
  fetchComment,
  fetchSubject,
  fetchPostComment,
} from "../../../../redux";
import { connect } from "react-redux";

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
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [note, setNote] = useState(false);

  useEffect(() => {
    fetchSubject(match.params, userData.data.Authorization);
    fetchComment(match.params, userData.data.Authorization);
  }, []);

  const postComment = () => {
    if (!title || !detail) {
      return setNote(true);
    }
    return fetchPostComment(
      match.params,
      localStorage.getItem("Authorization"),
      title,
      detail
    );
  };

  return (
    <>
      <NavBar />
      <div className="courseDiv">
        <div className="courseDetail">
          {dataSubject.data.title}

          <div className="subDetail">{dataSubject.data.detail}</div>
          <div className="subDetail">
            {dataSubject.data.article_url && (
              <div className="articleDiv">
                {Object.values(dataSubject.data.article_url).map(
                  (url, index) => (
                    <React.Fragment key={index}>
                      {index + 1}. <a href={url[2]}>{url[0]}</a>
                    </React.Fragment>
                  )
                )}
              </div>
            )}
            {dataSubject.data.video_url && (
              <div className="videoDiv">
                {Object.values(dataSubject.data.video_url).map((url, index) => (
                  <React.Fragment key={index}>
                    {index + 1}. <a href={url[2]}>{url[0]}</a>
                  </React.Fragment>
                ))}
              </div>
            )}
            {dataSubject.data.project_url && (
              <div className="sampleDiv">
                {Object.values(dataSubject.data.project_url).map(
                  (url, index) => (
                    <React.Fragment key={index}>
                      {index + 1}. <a href={url[2]}>{url[0]}</a>
                    </React.Fragment>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="discussDiv">
        <div className="discussDetail">
          <h1>Discussion</h1>
          <h1>Post your questions down below!</h1>
          <input
            type="text"
            placeholder="Title"
            className=""
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Detail"
            className=""
            onChange={(event) => {
              setDetail(event.target.value);
            }}
          />
          <button className="" onClick={postComment}>
            Post
          </button>

          {dataComment.data.map((comment) => (
            <Link to={`/comment/${comment.id}`}>
              <div className="commentDiv" key={comment.id}>
                <h1>{comment.username}</h1>
                <h1>{comment.Title}</h1>
                <h1>{comment.detail}</h1>
                <h1>{comment.DateTime}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    dataSubject: state.subject,
    dataComment: state.comment,
    dataPostComment: state.postComment,
    userData: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubject: (slug, headers) => dispatch(fetchSubject(slug, headers)),
    fetchComment: (slug, headers) => dispatch(fetchComment(slug, headers)),
    fetchPostComment: (slug, headers, title, detail) =>
      dispatch(fetchPostComment(slug, headers, title, detail)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
