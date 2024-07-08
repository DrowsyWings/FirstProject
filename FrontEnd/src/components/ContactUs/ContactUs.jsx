import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

function ContactUs() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-sky-200">
        <ContactHeader />
        <div className="container mx-auto px-4 py-8">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
