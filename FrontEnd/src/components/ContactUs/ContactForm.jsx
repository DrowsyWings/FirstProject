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

      //Backend Code here....
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
      //Todo : Update the contact form API

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
    <div className="bg-blue-800 text-white  rounded-[26px] justify-center mx-48 sm:px-8">
      <div className=" flex justify-center rounded-3xl px-4 sm:px-20 py-10 w-full">
        <form ref={formRef} onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl text-neutral-100 text-[45px] font-bold font-['Inter'] ">
              Contact Us
            </div>
            <div className="text-neutral-300 text-2xl font-medium font-['Inter'] ">
              Please fill out the quick form and we'll be in touch with
              lightning speed
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full">
              <div className="py-4 w-full">
                <label htmlFor="firstName">First Name*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setFirstName)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
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
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="lastName"
                  value={lastName}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full">
              <div className="py-4 w-full">
                <label htmlFor="mobile">Mobile Number*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setMobile)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
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
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="city"
                  value={city}
                />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full">
              <div className="py-4 w-full">
                <label htmlFor="companyName">Company Name</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setCompanyName)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
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
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="typeOfBusiness"
                  value={typeOfBusiness}
                />
                {errors.typeOfBusiness && (
                  <p className="text-red-500">{errors.typeOfBusiness}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full">
              <div className="py-4 w-full">
                <label htmlFor="whatDoYouWantToAdvertise">
                  What do you want to advertise?
                </label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setWhatDoYouWantToAdvertise)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
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
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="howManyBottles"
                  value={howManyBottles}
                />
                {errors.howManyBottles && (
                  <p className="text-red-500">{errors.howManyBottles}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-row sm:justify-evenly w-full">
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
                className="bg-[#FC581C] px-6 py-2 text-xl text-white rounded-md hover:bg-orange-300 hover:cursor-pointer active:bg-white active:text-orange-500 mt-8 h-12 sm-w[50px]"
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

<div className="w-[1078px] h-[932px] relative bg-blue-800 rounded-[26px]">
  <div className="px-16 py-5 left-[827px] top-[831px] absolute bg-orange-600 rounded-[9px] justify-center items-center gap-2.5 inline-flex">
    <div className="text-white text-2xl font-normal font-['Inter']">Send</div>
  </div>
  <div className="w-[440px] h-[167px] left-[64px] top-[733px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      Message
    </div>
    <div className="self-stretch grow shrink basis-0 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[574px] top-[598px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      How many bottles?
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[60px] top-[598px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      ‘What do want to advertise?’
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[574px] top-[463px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      Type of Business
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[60px] top-[463px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      Company Name
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[574px] top-[328px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      City*
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[60px] top-[328px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      Mobile Number*
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[574px] top-[193px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      Last Name*
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="h-[103px] left-[60px] top-[193px] absolute flex-col justify-start items-start gap-3 inline-flex">
    <div className="text-neutral-100 text-[22px] font-normal font-['Montserrat']">
      First Name*
    </div>
    <div className="self-stretch h-16 bg-white rounded-[10px]" />
  </div>
  <div className="left-[64px] top-[106px] absolute text-neutral-300 text-2xl font-medium font-['Inter']">
    Please fill out the quick form and we’ll be in touch with lightning speed.
  </div>
  <div className="p-2 left-[56px] top-[32px] absolute justify-center items-center gap-2 inline-flex">
    <div className="text-neutral-100 text-[45px] font-bold font-['Inter']">
      Contact us
    </div>
  </div>
</div>;
