import React, { useState } from "react";
import { LeftFlex } from "./styleComponents/FlexDivs";
import { FormDiv } from "./styleComponents/FormStyles";

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
      <form onChange={handleChange}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onClick={() => {
            sent ? send(false) : send(false);
          }}
          required
          autoFocus
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          required
          autoFocus
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          required
        ></textarea>
        <input
          type="submit"
          id="sendButton"
          value={sent ? "Message sent" : "Send"}
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
