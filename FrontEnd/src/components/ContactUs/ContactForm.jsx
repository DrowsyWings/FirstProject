import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function Subscribe({ formRef }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [typeOfBusiness, setTypeOfBusiness] = useState("");
  const [whatDoYouWantToAdvertise, setWhatDoYouWantToAdvertise] = useState("");
  const [howManyBottles, setHowManyBottles] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  //Submit Form
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!Mobile) newErrors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(Mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits.";
    if (!city) newErrors.city = "City is required.";
    if (!howManyBottles)
      newErrors.howManyBottles = "No. of bottles is required.";
    if (!captchaValue) newErrors.captcha = "Please verify the reCAPTCHA.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", { firstName });
      setIsSubmitting(true);
      setIsSubmitted(false);
      
      const formData = {
        firstName,
        lastName,
        Mobile,
        city,
        companyName,
        typeOfBusiness,
        whatDoYouWantToAdvertise,
        howManyBottles,
      };

      try {
        const response = await axios.post("http://localhost:3000/distribute", {
          FirstName: firstName,
          LastName: lastName,
          MobileNumber: Mobile,
          City: city,
          CompanyName: companyName,
          TypeOfBusiness: typeOfBusiness,
          WhatDoYouWantToAdvertise: whatDoYouWantToAdvertise,
          HowManyBottles: howManyBottles,
        });

        if (response.status === 200) {
          setIsSubmitted(true);
          setIsSubmitting(false);

          setFirstName("");
          setLastName("");
          setMobile("");
          setCity("");
          setCompanyName("");
          setTypeOfBusiness("");
          setWhatDoYouWantToAdvertise("");
          setHowManyBottles("");
          setCaptchaValue(null);
        } else {
          setErrors({
            form: "An error occurred while submitting the form. Please try again.",
          });
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        setErrors({
          form: "An error occurred while submitting the form. Please try again.",
        });
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-blue-800 text-white  rounded-[26px] justify-center inline-bl sm:px-8 md:w-[80%]">
      <div className=" flex justify-center rounded-3xl px-4 py-6 md:py-10 w-full">
        <form ref={formRef} onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col">
            <div className="text-[24px] sm:text-[32px] text-neutral-100 md:text-[45px] font-bold font-['Inter'] text-center">
              Contact Us
            </div>
            <div className="text-neutral-300 text-[16px] md:text-[24px] font-medium font-['Inter'] text-center mt-4 md:mt-8">
              Please fill out the quick form and we'll be in touch with
              lightning speed
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full lg:gap-20">
              <div className="py-4 w-full">
                <label htmlFor="firstName">First Name*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setFirstName)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="firstName"
                  value={firstName}
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="py-4 w-full sm:ml-6">
                <label htmlFor="lastName">Last Name*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setLastName)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="lastName"
                  value={lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full lg:gap-20">
              <div className="py-4 w-full">
                <label htmlFor="mobile">Mobile Number*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setMobile)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="mobile"
                  value={Mobile}
                  type="tel"
                />
                {errors.mobile && (
                  <p className="text-red-500">{errors.mobile}</p>
                )}
              </div>
              <div className="py-4 w-full sm:ml-6">
                <label htmlFor="city">City*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setCity)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="city"
                  value={city}
                />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full lg:gap-20">
              <div className="py-4 w-full">
                <label htmlFor="companyName">Company Name</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setCompanyName)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="companyName"
                  value={companyName}
                  type="tel"
                />
                {errors.companyName && (
                  <p className="text-red-500">{errors.companyName}</p>
                )}
              </div>
              <div className="py-4 w-full sm:ml-6">
                <label htmlFor="typeOfBusiness">Type of Business</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setTypeOfBusiness)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="typeOfBusiness"
                  value={typeOfBusiness}
                />
                {errors.typeOfBusiness && (
                  <p className="text-red-500">{errors.typeOfBusiness}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full lg:gap-20">
              <div className="py-4 w-full">
                <label htmlFor="whatDoYouWantToAdvertise">
                  What do you want to advertise?
                </label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setWhatDoYouWantToAdvertise)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="whatDoYouWantToAdvertise"
                  value={whatDoYouWantToAdvertise}
                />
                {errors.whatDoYouWantToAdvertise && (
                  <p className="text-red-500">
                    {errors.whatDoYouWantToAdvertise}
                  </p>
                )}
              </div>
              <div className=" py-4 w-full sm:ml-6">
                <label htmlFor="howManyBottles">How many bottles?</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setHowManyBottles)}
                  className="text-gray-900 text-[16px] md:text-[22px] px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="howManyBottles"
                  value={howManyBottles}
                />
                {errors.howManyBottles && (
                  <p className="text-red-500">{errors.howManyBottles}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full lg:gap-20">
              <div className="py-4 w-full">
                <ReCAPTCHA
                  sitekey="6LdXEPopAAAAAJENfwXUQs9aUZ-6r7FIM3X6VLGZ"
                  onChange={setCaptchaValue}
                />
                {errors.captcha && (
                  <p className="text-red-500">{errors.captcha}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#FC581C] px-6 py-2 text-[16px] md:text-[22px] text-white rounded-md hover:bg-orange-300 hover:cursor-pointer active:bg-white active:text-orange-500 mt-8 h-12 sm-w[50px]"
              >
                {isSubmitting ? "Submitting..." : "Send"}
              </button>
            </div>
            {isSubmitted && (
              <div className="flex items-center mt-4 text-green-500 text-xl">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Submitted Successfully!</span>
              </div>
            )}
            {errors.form && (
              <div className="flex items-center mt-4 text-red-500">
                <span className="w-64">{errors.form}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;