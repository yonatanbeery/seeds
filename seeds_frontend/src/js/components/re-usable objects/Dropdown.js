import React from 'react';

function Dropdown(props) {
    const List = props.List;
    const ProjectsList = List.map((projectName) =>
   <option>{projectName}</option>
    );

    return (
      <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select class="form-control" id="exampleFormControlSelect1">
        {ProjectsList}
      </select>
    </div>
    );
}
export default Dropdown;