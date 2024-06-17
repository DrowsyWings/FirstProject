import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function SubscribeForm() {
  //FirstName
  const [firstName, setFirstName] = useState("");
  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  //Last Name
  const [lastName, setLastName] = useState("");
  const handleChange2 = (e) => {
    setLastName(e.target.value);
  };

  //Mobile Numer
  const [Mobile, setMobile] = useState("");
  const handleChange3 = (e) => {
    setMobile(e.target.value);
  };

  //City
  const [City, setCity] = useState("");
  const handleChange4 = (e) => {
    setCity(e.target.value);
  };

  //Captcha
  const [captchaValue, setCaptchaValue] = useState(null);
  const onChange = (value) => {
    setCaptchaValue(value);
  };

  // Submission status state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!City) newErrors.city = "City is required.";
    if (!captchaValue) newErrors.captcha = "Please verify the reCAPTCHA.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", {
        firstName,
        lastName,
        Mobile,
        City,
        captchaValue,
      });
      setIsSubmitting(true);
      setIsSubmitted(false);

      //Backend Code here....
      const formData = { firstName, lastName, Mobile, City };

      try {
        const response = await axios.post(
          "http://your-node-backend-url/submit",
          formData
        );

        if (response.status === 200) {
          setIsSubmitted(true);
          setIsSubmitting(false);

          setFirstName("");
          setLastName("");
          setMobile("");
          setCity("");
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
    <div className="bg-[#0B102C] text-white flex justify-center py-28">
      <div className="bg-gray-700 flex justify-center rounded-3xl px-20 py-10">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl pb-5 text-center">
            Subscribe to get your FreeWater
          </h1>
          <div className="flex justify-center">
            <div className="flex-col mr-10">
              <div className="py-4">
                <label htmlFor="firstName">First Name*</label>
                <br></br>
                <input
                  onChange={handleChange}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2"
                  name="firstName"
                  value={firstName}
                ></input>
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="py-4">
                <label htmlFor="mobile">Mobile Number*</label>
                <br></br>
                <input
                  onChange={handleChange3}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2"
                  name="mobile"
                  value={Mobile}
                  type="tel"
                ></input>
                {errors.mobile && (
                  <p className="text-red-500">{errors.mobile}</p>
                )}
              </div>
              <div className="py-4 mt-2">
                <ReCAPTCHA
                  sitekey="6LdXEPopAAAAAJENfwXUQs9aUZ-6r7FIM3X6VLGZ"
                  onChange={onChange}
                />
                {errors.captcha && (
                  <p className="text-red-500">{errors.captcha}</p>
                )}
              </div>
            </div>
            <div>
              <div className="py-4">
                <label htmlFor="lastName">Last Name*</label>
                <br />
                <input
                  onChange={handleChange2}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2"
                  name="lastName"
                  value={lastName}
                ></input>
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName}</p>
                )}
              </div>
              <div className="py-4">
                <label htmlFor="city">City*</label>
                <br />
                <input
                  onChange={handleChange4}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2"
                  name="city"
                  value={City}
                ></input>
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>
              <button
                type="submit"
                className="bg-[#FC581C] px-3 py-2 text-xl text-white rounded-md hover:bg-orange-300 hover:cursor-pointer active:bg-white active:text-orange-500 mt-8 ml-44"
              >
                Send
              </button>
              {isSubmitted && (
                <div className="flex items-center mt-4 text-green-500 ml-4 text-xl">
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubscribeForm;
