import React, {  } from 'react'
import { Link} from "react-router-dom";
const NavBar = () => {
    return (
      <div>
        <nav className="navbar narbar-primary navbar-expand-lg fixed-top bg-primary text-white">
            <div className="container">
                <Link className="navbar-brand fs-2 fw-bold text-white" to="/">FaltuNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )

  // Your API key is: 0c13c1e1bd254ce98257c540551a4983
}

export default NavBar
