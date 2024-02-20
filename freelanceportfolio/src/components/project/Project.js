import React, { Component } from 'react'
import './Project.css'


export class Project extends Component {
  render() {
    return (
        <> 
            <li className="project">
                <a href="./project_page.html">
                    <img src={this.props.img} alt={this.props.title} className="project__img" />
                    <h3 className="project__title">{this.props.title}</h3>
                </a>
            </li>
        </>
    )
  }
}

export default Project