import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../css/build.css";
import "../../../css/Travel.css";
import Backwards from "../re-usable objects/Backwards";
import Dropdown from "../re-usable objects/Dropdown";

export default function BitbucketInfo (props) {
        return (
<div class="container-fluid leftComponent">
    <div class="row no-gutters border rounded shadow-sm">
        <div class="col p-4 flex-column api">
        <strong class="text-primary">Bitbucket</strong>
          <p class="card-text mb-auto">choose a project type</p>
          <Dropdown List={props.List}/>
      </div>
      </div>
      <Backwards/>
</div>
        );
  }