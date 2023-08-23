import React from "react";

export function Bottom() {
  return (
    <div className="bottom">
      <footer>
        <p>Copyright © {new Date().getFullYear()}</p>
        <div className="footer-link">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/joseph-ellsberry/"
          >
            Linkedin
          </a>
          <a className="footer-link" href="https://twitter.com/Jellsberry147">
            Twitter
          </a>
          <a
            className="footer-link"
            href="https://jnorth3393.wixsite.com/ideasync"
          >
            Wix
          </a>
          <a
            className="footer-link"
            href=" https://www.youtube.com/channel/UCKBuhZMwUCFGZ7kGx-MvrPQ"
          >
            YouTube
          </a>
        </div>
      </footer>
    </div>
  );
}
