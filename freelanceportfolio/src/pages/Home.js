import React, { Component } from 'react'

import Header from "../components/header/Header"

export class Home extends Component {
  render() {
    return (
      <div>
        
        <Header />

        <main class="section">
            <div class="container">
                <h1 class="title-1">Skills</h1>
                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, Bootstrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Backend</h2>
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