import React, { useState, useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "./home.css";
import { fetchHome } from "../../../redux";

function Home({ data, homeData, fetchHome }) {
  useEffect(() => {
    
    fetchHome(data.Authorization);
  }, []);

  if (homeData.error){
    window.location.reload()
  }
  
  return (
    <div>
      <NavBar />
      <div className="home-content">
        <IconContext.Provider value={{ size: "180px" }}>
          <div className="home-profile">
            <h1 className="welcomeTitle">Welcome to DevGuide</h1>
            <FaIcons.FaUserCircle />
            <h1>Hello, {data.username}</h1>
          </div>
          <div className='course-control'>
            <h1>Latest Course</h1>
            <ol className='courseList'>
            {homeData.data.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/guides/${item.learning_path_slug}/${item.sub_title1_slug}/${item.sub_title2_slug}/${item.sub_title3_slug}/${item.slug}`}
                >{item.Title} ({item.learning_path})
                </Link>
              </li>
            ))}
            </ol>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.login.data,
    homeData: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHome: (headers) => dispatch(fetchHome(headers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
