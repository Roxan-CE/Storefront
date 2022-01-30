import React, { useState } from "react";
import { FormDiv } from "../styleComponents/FormStyles";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, send] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <FormDiv>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onClick={() => {
            sent ? send(false) : send(false);
          }}
          onChange={handleChange}
          required
          autoFocus
        />
        <input
          type="email"
          name="email"
          onClick={() => {
            sent ? send(false) : send(false);
          }}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          autoFocus
        />
        <textarea
          placeholder="Message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          onClick={() => {
            sent ? send(false) : send(false);
          }}
          required
        ></textarea>
        <input
          type="submit"
          id="sendButton"
          value={sent ? "Message sent" : "Send"}
          onChange={handleChange}
          disabled={sent ? true : false}
          onClick={(e) => {
            let x = document.getElementById("sendButton");
            e.preventDefault();
            console.log(formData);
            setFormData({
              name: "",
              email: "",
              message: "",
            });
            send(true);
          }}
        />
      </form>
    </FormDiv>
  );
}

export default ContactForm;
