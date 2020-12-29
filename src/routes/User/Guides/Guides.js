import React, { useEffect } from "react";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./guides.css";
import { fetchLearning } from "../../../redux/";
import { connect } from "react-redux";

function Guides({ data, fetchLearning }) {
  useEffect(() => {
    fetchLearning(localStorage.getItem("Authorization"));
  }, []);
  return (
    <div>
      <NavBar />
      <div className="guides-page">
        <div className="guides-content">
          <div className="guides-title">
            <h1>Developer Roadmaps</h1>
          </div>
          <div className="guides-detail">
            {data.data.map((item, index) => (
              <React.Fragment key={index}>
                <Link to={`/guides/${item.slug}`}>
                  <button className="crusialButton">{item.Title}</button>
                </Link>
                <div className="guidesTitleDetail">
                  <h4>{item.details}</h4>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.learn_path,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLearning: (headers) => dispatch(fetchLearning(headers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Guides);
