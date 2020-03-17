import React from 'react';
import { SkipStart } from 'react-bootstrap-icons';
import "../../../css/build.css";

function Backwards() {

    return (
        <a href="/" type="button" class="btn btn-danger" id="Backwards"><SkipStart size={30}/></a>
    );
}
export default Backwards;