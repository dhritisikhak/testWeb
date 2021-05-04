import React from "react";
import "./style.scss";
import logo from "../../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="content-wrapper sideMargin">
          <nav className="navbar navbar-expand-lg">
            <p className="navbar-brand">
              <img src={logo} className="logo" alt="logo" />
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <svg width="21" height="14" fill="none">
                  <path
                    fill="#1b91ff"
                    d="M.5 0h20v1.481H.5zM.5 5.926h20v1.481H.5zM.5 11.852h20v1.481H.5z"
                  ></path>
                </svg>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="navText"
                    aria-current="page"
                    href="/"
                  >
                    TRENDING
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="navText" href="/">
                    VIDEOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="navText" href="/">
                    STORIES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="navText" href="/">
                    QUIZZES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="navText" href="/">
                    MEMES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="navText" href="/">
                    SPOTLIGHT
                  </a>
                </li>
              </ul>
              <div className="my-2 my-lg-0 pr-3">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <svg
                      className="not-marked"
                      width="12"
                      height="17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M.5 16.2L6 13.45l5.5 2.75V1.57C11.5.704 10.796 0 9.929 0H2.07C1.204 0 .5.704.5 1.571V16.2zM6 11.693l-3.929 1.964V1.571H9.93v12.086L6 11.693z"
                        fill="#1b91ff"
                      ></path>
                    </svg>
                  </li>
                  <li className="nav-item pl-4">
                    <svg width="18" height="16" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.6 1.524c-1.85 0-3.35 1.523-3.35 3.403 0 1.88 1.5 3.403 3.35 3.403s3.35-1.523 3.35-3.403c0-1.88-1.5-3.403-3.35-3.403zM3.75 4.927C3.75 2.206 5.921 0 8.6 0s4.85 2.206 4.85 4.927c0 2.721-2.171 4.927-4.85 4.927S3.75 7.648 3.75 4.927z"
                        fill="#1b91ff"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.5 14.877c0-3.307 3.134-5.988 7-5.988s7 2.68 7 5.988c0 0-3.134 1.123-7 1.123s-7-1.123-7-1.123zm12.325-1.093c-.583-1.813-2.578-3.371-5.325-3.371-2.747 0-4.742 1.558-5.325 3.371a21.746 21.746 0 0 0 5.325.692 21.747 21.747 0 0 0 5.325-.692z"
                        fill="#1b91ff"
                      ></path>
                    </svg>
                  </li>
                  <li className="nav-item pl-4">
                    <svg width="17" height="16" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.995 12.99a6.495 6.495 0 1 1 5.131-2.512l4.374 4.374L15.352 16l-4.374-4.374a6.467 6.467 0 0 1-3.983 1.364zm4.872-6.495a4.871 4.871 0 1 1-9.743 0 4.871 4.871 0 0 1 9.742 0z"
                        fill="#1b91ff"
                      ></path>
                    </svg>
                  </li>
                  <li className="nav-item pl-4">
                    <svg width="21" height="14" fill="none">
                      <path
                        fill="#1b91ff"
                        d="M.5 0h20v1.481H.5zM.5 5.926h20v1.481H.5zM.5 11.852h20v1.481H.5z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
