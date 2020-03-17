import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import BitbucketInfo from "./BitbucketInfo";
import BambooCreatePlan from "./BambooCreatePlan";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { getBitbucketProjectsTypes } from "../../actions/index";

function mapStateToProps(state) {
    return {
        Projects: state.projectTypes
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        setProjectsTypes: () => dispatch(getBitbucketProjectsTypes())
    };
  }

function BuildComponent ({Projects, setProjectsTypes}){
    useEffect(() => {
      setProjectsTypes()
      },[]);

    return (
        <div class="container-fluid main">
        <div class="row" id="dontfloat">
        <div class="col-5"><BitbucketInfo List={Projects}/></div>
            <div class="col-7"><BambooCreatePlan/></div>
        </div>
        </div>
    );
}

const build = connect(mapStateToProps, mapDispatchToProps)(BuildComponent);
export default build;