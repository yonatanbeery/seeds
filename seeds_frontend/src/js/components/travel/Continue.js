import React from 'react';
import { SkipEnd } from 'react-bootstrap-icons';
import "../../../css/build.css";

function Continue() {

    return (
        <a href="/" type="button" class="btn btn-primary" id="Continue"><SkipEnd size={30}/></a>
    );
}
export default Continue;