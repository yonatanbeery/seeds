import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../css/build.css";
import "../../../css/Travel.css";
import Backwards from "../travel/Backwards";
import Dropdown from "../travel/Dropdown";

export default function BitbucketInfo () {
        return (
<div class="container-fluid leftComponent">
    <div class="row no-gutters border rounded shadow-sm">
        <div class="col p-4 flex-column api">
        <strong class="text-primary">Bitbucket</strong>
          <p class="card-text mb-auto">here will be the bitbucket api, searching for project and branch to create plan for</p>
          <Dropdown/>
      </div>
      </div>
      <Backwards/>
</div>
        );
  }