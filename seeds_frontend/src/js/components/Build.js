import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/build.css"
import BitbucketInfo from "./BitbucketInfo";
import BambooCreatePlan from "./BambooCreatePlan";

export default class Build extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                <div class="col-5"><BitbucketInfo/></div>
                <div class="col-7"><BambooCreatePlan/></div>
                </div>
            </div>
        );
    }
  }