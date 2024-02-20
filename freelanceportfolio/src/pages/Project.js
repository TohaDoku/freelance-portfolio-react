import React, { Component } from 'react'
import BtnGitHub from '../components/buttonGitHub/BtnGitHub'

import {projects} from '../components/helpers/projectList'
import {useParams} from 'react-router-dom'

export class Project extends Component {
  render() {
    
    const project = projects[this.props.id]

    return (
      <div>
        <main className="section">
            <div className="container">
                <div className="project-details">    
                    <h1 className="title-1">{project.id}</h1>
                    <img src="./img/projects/02-big.jpg" alt="" className="project-details__cover" />
                    <div className="project-details__desc">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>
                    <BtnGitHub />
                </div>
            </div>
        </main>
      </div>
    )
  }
}

export default Project