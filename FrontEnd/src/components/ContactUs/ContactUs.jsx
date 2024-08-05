import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import HeaderNav from "../Header/HeaderNav";

function ContactUs() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-sky-200 relative">
        <HeaderNav />
        <div className="container mx-auto px-4 pb-20 flex justify-center items-center flex-col w-full">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
