import * as React from 'react';
import avatarImg from '../assets/img/avatar.png';
import './jumbotron.scss';

export class Jumbotron extends React.Component<{}, {}> {
  public render() {
    return (
      <header role="banner" className="jumbotron">
        <div className="jumbotron__avatar">
          <img
            src={avatarImg}
            width="128"
            height="128"
            className="jumbotron__avatar-img"
          />
        </div>
        <h1 className="jumbotron__name">
          <span className="jumbotron__name-text">Seong Yong-ju</span>
        </h1>
        <p className="jumbotron__role">
          <span className="jumbotron__role-text">
            Software Engineer/Systems Architect
          </span>
        </p>
        <section className="jumbotron__introduction">
          <p>
            I've been interested in developing an application since my childhood
            <br />
            and have extensive experience in engineering.
          </p>
        </section>
        <section className="jumbotron__sns-links">
          <ul className="jumbotron__sns-link-list">
            <li className="jumbotron__sns-link-item">
              <a
                href="https://www.linkedin.com/in/sei40kr/"
                title="LinkedIn"
                className="jumbotron__sns-link"
              >
                LinkedIn
              </a>
            </li>
            <li className="jumbotron__sns-link-item">
              <a
                href="https://github.com/sei40kr"
                title="GitHub"
                className="jumbotron__sns-link"
              >
                GitHub
              </a>
            </li>
            <li className="jumbotron__sns-link-item">
              <a
                href="https://leetcode.com/sei40kr/"
                title="LeetCode"
                className="jumbotron__sns-link"
              >
                LeetCode
              </a>
            </li>
            <li className="jumbotron__sns-link-item">
              <a
                href="https://atcoder.jp/users/sei40kr"
                title="AtCoder"
                className="jumbotron__sns-link"
              >
                AtCoder
              </a>
            </li>
          </ul>
        </section>
      </header>
    );
  }
}

export default Jumbotron;
