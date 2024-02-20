import "./styles/main.css"

import vk from "./img/icons/01.svg"
import inst from "./img/icons/02.svg"
import twiter from "./img/icons/03.svg"
import github from "./img/icons/04.svg"
import linked from "./img/icons/05.svg"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="App">
      
      <Navbar />

    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Anton</em></strong><br />
                a fullstack developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </header>
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="./project_page.html">
                        <img src="./img/projects/01.jpg" alt="Project img" className="project__img" />
                        <h3 className="project__title">Gaming streaming portal</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project_page.html">
                        <img src="./img/projects/02.jpg" alt="Project img" className="project__img" />
                        <h3 className="project__title">Video service</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project_page.html">
                        <img src="./img/projects/03.jpg" alt="Project img" className="project__img" />
                        <h3 className="project__title">Video portal</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project_page.html">
                        <img src="./img/projects/04.jpg" alt="Project img" className="project__img" />
                        <h3 className="project__title">Dating App</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project_page.html">
                        <img src="./img/projects/05.jpg" alt="Project img" className="project__img" />
                        <h3 className="project__title">Landing</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project_page.html">
                        <img src="./img/projects/06.jpg" alt="Project img" className="project__img" />
                        <h3 className="project__title">Game community</h3>
                    </a>
                </li>
            </ul>
        </div>
    </main>
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={inst} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twiter} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linked} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 Doku Fullstack Developer</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
