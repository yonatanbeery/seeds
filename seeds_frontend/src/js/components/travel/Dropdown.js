import React from 'react';

function Dropdown() {
    const List = ['None','lapid', 'rakia', 'golden bell'];
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