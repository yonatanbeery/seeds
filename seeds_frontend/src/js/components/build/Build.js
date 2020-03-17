import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import BitbucketInfo from "./BitbucketInfo";
import BambooCreatePlan from "./BambooCreatePlan";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { getBitbucketProjects } from "../../actions/index";

function mapStateToProps(state) {
    return {
        Projects: state.bitbucketProjects
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        getBitbucketProjects: () => dispatch(getBitbucketProjects())
    };
  }

function BuildComponent ({Projects}){
    const [bitbucketProjects, changeBitbucketProjects] = useState(Projects);


    return (
        <div class="container-fluid main">
        <div class="row" id="dontfloat">
        <div class="col-5"><BitbucketInfo List={bitbucketProjects}/></div>
            <div class="col-7"><BambooCreatePlan/></div>
        </div>
        </div>
    );
}

const build = connect(mapStateToProps, mapDispatchToProps)(BuildComponent);
export default build;