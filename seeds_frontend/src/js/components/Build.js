import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BitbucketInfo from "./build/BitbucketInfo";
import BambooCreatePlan from "./build/BambooCreatePlan";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Build (){
        return (
            <div class="container-fluid main">
            <div class="row" id="dontfloat">
            <div class="col-5"><BitbucketInfo/></div>
                <div class="col-7"><BambooCreatePlan/></div>
            </div>
            </div>
        );
  }