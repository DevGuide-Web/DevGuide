import React, { useEffect } from "react";
import NavBar from "../../NavBar/NavBar";
import { IconContext } from "react-icons";
import * as RiIcons from "react-icons/ri";
import { Link, withRouter } from "react-router-dom";
import "./guides.css";
import { fetchTitle1 } from "../../../redux/";
import { connect } from "react-redux";

function Title1({ data, userData, fetchTitle1, match }) {
  
  useEffect(() => {
    fetchTitle1(match.params, userData.data.Authorization);
  }, []);
  return (
    <div>
      <NavBar />
      <div className="guides-page">
        <div className="guides-content">
          <div className="guides-title">
            <h1>Developer Roadmaps</h1>
          </div>
          <IconContext.Provider value={{ size: "30px" }}>
            <div className="guides-detail">
              {data.data && data.data.length > 0 ? data.data.map((item, index) => (
                <React.Fragment key={index}>
                  <Link to={`/guides/${item.learning_path_slug}/${item.slug}`}>
                    <button className="crusialButton">{item.Title}</button>
                  </Link>
                  <div className="guidesTitleDetail">
                    <h4>{item.details}</h4>
                  </div>
                </React.Fragment>
              )) : <React.Fragment>
              <div className="guidesTitleDetail">
                <h4>Coming Soon</h4>
              </div>
            </React.Fragment>}
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.sub_title1,
    userData: state.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTitle1: (slug, headers) => dispatch(fetchTitle1(slug, headers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Title1);
