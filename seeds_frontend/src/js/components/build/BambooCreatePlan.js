import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../css/build.css"
import "../../../css/Travel.css";
import Continue from "../re-usable objects/Continue";

export default function BambooCreatePlan () {
        return (
<div class="container-fluid rightComponent">
      <div class="row no-gutters border rounded shadow-sm">
        <div class="col p-4 flex-column api">
          <strong class="text-primary">Bamboo</strong>
          <p class="card-text mb-auto">here will be the Bamboo api, searching for prohect and creating plans</p>
        </div>
      </div>
      <Continue/>
</div>
        );
  }