import React, { useEffect } from "react";
import NavBar from "../../../NavBar/NavBar";
import "./course.css";
import { fetchComment, fetchSubject } from "../../../../redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Subject({
  dataSubject,
  dataComment,
  fetchSubject,
  fetchComment,
  match,
}) {
  useEffect(() => {
    fetchSubject(match.params, localStorage.getItem("Authorization"));
    fetchComment(match.params, localStorage.getItem("Authorization"));
  }, []);
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
                      {index + 1}. <a href={url}>{url}</a>
                    </React.Fragment>
                  )
                )}
              </div>
            )}
            {dataSubject.data.video_url && (
              <div className="videoDiv">
                {Object.values(dataSubject.data.video_url).map((url, index) => (
                  <React.Fragment key={index}>
                    {index + 1}. <a href={url}>{url}</a>
                  </React.Fragment>
                ))}
              </div>
            )}
            {dataSubject.data.project_url && (
              <div className="sampleDiv">
                {Object.values(dataSubject.data.project_url).map(
                  (url, index) => (
                    <React.Fragment key={index}>
                      {index + 1}. <a href={url}>{url}</a>
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
          {dataComment.data.map((comment) => (
            <div className="commentDiv">
              <h1>{comment.username}</h1>
              <h1>{comment.title}</h1>
              <h1>{comment.detail}</h1>
              <h1>{comment.DateTime}</h1>
            </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubject: (slug, headers) => dispatch(fetchSubject(slug, headers)),
    fetchComment: (slug, headers) => dispatch(fetchComment(slug, headers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
