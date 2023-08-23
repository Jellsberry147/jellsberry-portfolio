import { BannerImage } from "./BannerImage";

export function Hobbies() {
  return (
    <div>
      <BannerImage />
      <div className="aboutContainer">
        <ul>
          <li>
            <h2>3D Printing</h2>
            <p className="aboutPara">
              At this point, I've printed almost every category of object I can
              think of: upgrades for the home, gifts, memorabilia, I've even
              done 3D scans of friends and family and given them their
              ultimate-custom presents! I love how limitless the medium of 3D
              printing is! If you can imagine it, you can make it.
            </p>
            <li>
              <h2>Smart Home</h2>
              <p className="aboutPara">
                You wouldn't necessarily think it by how cozy it looks, but when
                you walk into my home - everything is connected. The lights,
                sure, but so is the cat food dispenser, litterbox, garage door,
                3D printer, and basically anything else that uses electricity!
                Some things turn off when no one's home, some lights turn on
                only when someone's in the room, and the litterbox runs several
                times a day (for everyone's sake!) I hope to improve and push
                past the current boundaries of my smart home in coming years,
                technology and career-permitting. If a task can be done more
                efficiently and as a result can free up more time to do the
                things that matter most, then I'm all for staying on the
                bleeding edge of technology! :)
              </p>
            </li>
            <li>
              <h2>Family Time</h2>
              <p className="aboutPara">
                One of my favorite ways to wind down after the day's work is
                done is by spending quality time with my wife and our family. We
                can be playing board games or video games, going for a walk, or
                just doing our own separate things right next to each other on
                the couch. It all helps me recharge and get ready to get back
                out there and make a difference in the world around me! Lately,
                my wife and I have been challenging each other to read more
                books, and both have goals set through the Goodreads platform.
                I'm aiming for 20 books this year!
              </p>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}
