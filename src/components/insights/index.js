import { useState } from "react";
import "./index.css";
import { PiCaretDoubleRight } from "react-icons/pi";

const comments = [];

function Insights() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct mailto link
    const mailtoLink = `mailto:vincent.n@hotmail.fr?subject=Comment from ${
      formData.name
    }&body=${encodeURIComponent(formData.message)} (${formData.email})`;

    // Open default email client with pre-filled fields
    window.location.href = mailtoLink;
  };

  return (
    <div className="Insights">
      <div className="Insights-comments">
        <div className="Insights-comments-header">
          <p>Comments</p>
        </div>
        <div>
          {comments.length === 0 && (
            <p className="Insights-no-comments">
              No comments for the moment. Be the first !
            </p>
          )}
          {comments.map((c) => (
            <div className="Insights-comment">
              <div>
                <div>
                  <p>{c.name.charAt(0)}</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>{c.name}</p>
                  <p style={{ opacity: 0.6 }}>{c.date}</p>
                </div>
              </div>
              <p>{c.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p>
          Do you have a comment to do on my work ? Please feel free to write.
        </p>
        <form onSubmit={handleSubmit}>
          <label>My name is</label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            required
          ></input>
          <br />
          <label>I can be joined at</label>
          <input
            type="text"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            required
          ></input>
          <br />
          <label>Here is my message</label>
          <textarea
            name="message"
            rows="1"
            type="text"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />
          <br />
          <button type="submit">
            Submit
            <div>
              <PiCaretDoubleRight />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Insights;
