import { BannerImage } from "./BannerImage";

export function About() {
  return (
    <div>
      <BannerImage />
      <div className="aboutContainer">
        <ul>
          <li>
            <h2>Career Goals</h2>
            <p className="aboutPara">
              My ambition is to establish myself in the web development world,
              and to thrive in a field that's all about solving logical problems
              in creative ways. I have 8 years of experience in my current field
              where every day presents new opportunities to develop solutions
              through clear communication and skillful problem solving.
            </p>
            <li>
              <h2>Educational Goals</h2>
              <p className="aboutPara">
                I finished my Bachelor's degree with a solid 4.0 cumulative GPA
                and have been developing my technical skills ever since. After a
                short break from university life to get my career started, I
                plan to go for my Master's. In the meantime, I plan to continue
                learning everything I can that Web Development, Database
                Management, Digital Device Creation, Project Management, and
                Software Engineering have to offer through Youtube, Udemy, and
                the development clubs I'm a part of.
              </p>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}
