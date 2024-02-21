import React, { Component } from 'react'

import Header from "../components/header/Header"

export class Home extends Component {
  render() {
    return (
      <div>
        
        <Header />

        <main className="section">
            <div className="container">
                <h1 className="title-1">Skills</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, Bootstrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>Django, NodeJS, MongoDB, PHP, Laravel</p>
                    </li>
                </ul>
            </div>
        </main>

      </div>
    )
  }
}

export default Home