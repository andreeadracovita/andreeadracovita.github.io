import { Link } from "react-router-dom"
import { ReactComponent as Linkedin } from "./assets/linkedin.svg"

function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark mx-5">
                    <a className="navbar-brand" href="/">Andreea Racovita</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">contact</Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="https://www.linkedin.com/in/andreearacovita/">
                                    <i className="bi bi-linkedin">
                                        <Linkedin />
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Navbar;