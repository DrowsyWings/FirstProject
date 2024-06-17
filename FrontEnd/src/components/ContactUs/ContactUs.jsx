import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div className="text-white">
      <h1 className=" text-center py-5 sm:text-7xl text-3xl">Let's progress together!</h1>
      <h2 className="text-center py-5 px-6 sm:px-0 sm:text-xl text-sm">Please fill out the quick form and we'll be in touch with lightning speed.</h2>
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <ContactForm></ContactForm>
        <ContactDetails></ContactDetails>
      </div>
    </div>
  );
}

export default ContactUs;
