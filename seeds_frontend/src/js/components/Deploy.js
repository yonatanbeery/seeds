import React, { Component } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/build.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default class Deploy extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://localhost:8080/bitbucket/allProjects')
    // send the request
    xhr.send()
  }

  render() {
    return (
      <div class="container-fluid main">>
        <p>Hello World</p>
      </div>
    )
  }
}