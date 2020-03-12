import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../css/build.css";
import "../../../css/Travel.css";
import Backwards from "../travel/Backwards";

export default class BitbucketInfo extends React.Component {
    render() {
        return (
<div class="container-fluid leftComponent">
      <div class="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 api">
          <strong class="d-inline-block mb-2 text-primary">Bitbucket</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      </div>
      <Backwards/>
</div>
        );
    }
  }