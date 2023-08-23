import React from "react";
import { Link } from "react-router-dom";

export function Description() {
  return (
    <div className="description">
      <h3>Joseph Ellsberry: Creative Mastermind</h3>
      <hr className="desciptionHr" />
      <p>
        <span className="descriptionIntro">
          <i> Fast Learner, Ambitious Developer</i>
        </span>
      </p>
      <p>
        <span className="descriptionWow">
          <b>Now available for hiring! Wow!</b>
        </span>
      </p>
      <ul>
        <li>
          Comfortable with HTML, CSS, and currently working towards mastery of
          JS, as well as its library,
          <em> React!</em>
        </li>
        <li>Looking for a company in which to grow, learn, and amaze!</li>
        <li>
          Familiar with AWS, Java, C++, Python, Microsoft Office, and many more
          technologies!
        </li>
      </ul>
      <div>
        <Link
          to="/jellsberry-portfolio/About"
          className="aboutButton"
          title="Links to 'About Me' Page"
        >
          More About Me!
        </Link>

        <a
          href="https://github.com/Jellsberry147"
          className="projectsButton"
          title="Links to Github"
        >
          Check out my Projects!
        </a>
      </div>
    </div>
  );
}
