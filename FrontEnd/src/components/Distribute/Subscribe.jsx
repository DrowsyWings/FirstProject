import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function Subscribe({ formRef }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [City, setCity] = useState("");
  const [Company, setCompany] = useState("");
  const [business, setbusiness] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
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
    if (!Company) newErrors.company = "Company Name is required.";
    if (!City) newErrors.city = "City is required.";
    if (!address) newErrors.address = "Shipping Address is required";
    if (!amount) newErrors.amount = "Amount is Required";
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
        City,
        Company,
        business,
        address,
        amount,
      };

      try {
        const response = await axios.post("http://localhost:3000/distribute", {
          FirstName: firstName,
          LastName: lastName,
          MobileNumber: Mobile,
          City: City,
          CompanyName: Company,
          TypeOfBusiness: business,
          ShippingAddress: address,
          Amount: parseInt(amount),
        });

        if (response.status === 200) {
          setIsSubmitted(true);
          setIsSubmitting(false);

          setFirstName("");
          setLastName("");
          setMobile("");
          setCity("");
          setCompany("");
          setbusiness("");
          setAddress("");
          setAmount("");
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
    <div className="bg-[#0B102C] text-white flex justify-center py-28 px-10">
      <div className="bg-gray-700 flex justify-center rounded-3xl px-4 sm:px-20 py-10 w-[700px]">
        <form ref={formRef} onSubmit={handleSubmit} className="w-full">
          <h1 className="text-4xl pb-5 text-center">Subscribe today</h1>
          <div className="flex flex-col sm:flex-row sm:flex-wrap">
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
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
            </div>
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
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
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
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
            </div>
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
                <label htmlFor="city">City*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setCity)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="city"
                  value={City}
                />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
                <label htmlFor="company">Company Name*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setCompany)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="company"
                  value={Company}
                />
                {errors.company && (
                  <p className="text-red-500">{errors.company}</p>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
                <label htmlFor="business">Type of business</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setbusiness)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="business"
                  value={business}
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
                <label htmlFor="address">Shipping Address*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setAddress)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="address"
                  value={address}
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address}</p>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 sm:px-2">
              <div className="py-4">
                <label htmlFor="amount">Amount*</label>
                <br />
                <input
                  onChange={(e) => handleChange(e, setAmount)}
                  className="text-gray-900 text-xl px-2 py-2 rounded-md border-none mt-2 w-full"
                  name="amount"
                  value={amount}
                  type="number"
                />
                {errors.amount && (
                  <p className="text-red-500">{errors.amount}</p>
                )}
              </div>
            </div>
            <div className="w-full flex justify-between sm:px-2 mt-2">
              <div className="py-4">
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
                className="bg-[#FC581C] px-6 py-2 text-xl text-white rounded-md hover:bg-orange-300 hover:cursor-pointer active:bg-white active:text-orange-500 mt-8 h-12"
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
