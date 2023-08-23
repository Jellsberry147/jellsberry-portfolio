import React from "react";
import { BannerImage } from "./BannerImage";
import { Description } from "./Description";

export function Content() {
  return (
    <div className="content">
      <BannerImage />
      <div className="descriptionWrapper">
        <Description />
      </div>
      <div>
        <div className="flex-container">
          <div>
            <div className="beachIMGL contentIMG">
              <p>I'm currently learning best practices for adaptive pages!</p>
            </div>

            <div className="beachIMGML contentIMG">
              <p>These images shrink and adjust based on your screen width.</p>
            </div>

            <div className="beachIMGMR contentIMG">
              <p>Go ahead, make the website smaller!</p>
            </div>

            <div className="beachIMGR contentIMG">
              <p>Better yet, check it out on a mobile device!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <h5>
          Having studied extensively independently and through my exploration of
          several web development courses focusing on JS and many fundamentals,
          I will be a valuable addition to your team!
        </h5>
        <h5>
          Having recently graduated with my Bachelor's Degree in Computer
          Information Systems in October 2022, I can't wait to get started on my
          career!
        </h5>
      </div>
    </div>
  );
}
