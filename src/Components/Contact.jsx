import { useState } from "react";
import { BannerImage } from "./BannerImage";

export function Contact() {
  const [textArea, setTextArea] = useState("");

  function handleTextAreaChange(event) {
    setTextArea(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setTextArea("");
    window.location.href =
      "mailto:jellsberry147@gmail.com?&subject=Contact from the Website!&body=" +
      textArea;
  }

  return (
    <div>
      <BannerImage />
      <form className="form" onSubmit={handleClick}>
        <textarea
          className="textInputArea"
          var
          onChange={handleTextAreaChange}
          type="textArea"
          placeholder="What do you want to say? Be sure to introduce yourself!"
          value={textArea}
          required
        />
        <button
          className="submitButton"
          type="submit"
          title="Click to submit your information."
        >
          Send me an Email!
        </button>
      </form>
    </div>
  );
}
