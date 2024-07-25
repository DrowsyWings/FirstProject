import React, { useState } from "react";
import axios from "axios";

function Subscribe({ formRef }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [City, setCity] = useState("");
  const [Company, setCompany] = useState("");
  const [business, setbusiness] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");
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
    if (!City) newErrors.city = "City is required.";

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
        reason,
        amount,
        message,
      };

      try {
        const response = await axios.post("http://localhost:3000/distribute", {
          FirstName: firstName,
          LastName: lastName,
          MobileNumber: Mobile,
          City: City,
          CompanyName: Company,
          TypeOfBusiness: business,
          Reason: reason,
          Amount: parseInt(amount),
          Message: message,
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
          setReason("");
          setAmount("");
          setMessage("");
        } 
        else {
          setErrors({
            form: "An error occurred while submitting the form. Please try again.",
          });
          setIsSubmitting(false);
        }
      } 
      catch (error) {
        console.error("Error submitting the form:", error);
        setErrors({
          form: "An error occurred while submitting the form. Please try again.",
        });
        setIsSubmitting(false);
      }
    }
  };

  return (
      <div className="bg-[#0F40A8] flex justify-center  rounded-3xl px-4  sm:px-20 py-10 mt-[60px] sm:mt-[120px] mb-[40px] sm:mb-[120px] text-[#FEFEFF] mx-[25px] sm:mx-0">
        <form ref={formRef} onSubmit={handleSubmit} className="w-full">
          <h1 className="font-inter text-[30px] sm:text-[45px] not-italic font-bold leading-normal pb-5 flex justify-self-start w-full">Get a Quote</h1>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between sm:gap-[80px]">
              <div className="w-full sm:w-1/2 sm:px-2">
                <div className="py-4">
                  <label htmlFor="firstName" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">First Name*</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setFirstName)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
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
                  <label htmlFor="lastName" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">Last Name*</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setLastName)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
                    name="lastName"
                    value={lastName}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:gap-[80px]">
              <div className="w-full sm:w-1/2 sm:px-2">
                <div className="py-4">
                  <label htmlFor="mobile" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">Mobile Number*</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setMobile)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
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
                  <label htmlFor="city" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">City*</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setCity)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
                    name="city"
                    value={City}
                  />
                  {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:gap-[80px]">
              <div className="w-full sm:w-1/2 sm:px-2">
                <div className="py-4">
                  <label htmlFor="company" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">Company Name</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setCompany)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
                    name="company"
                    value={Company}
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-2">
                <div className="py-4">
                  <label htmlFor="business" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">Type of business</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setbusiness)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
                    name="business"
                    value={business}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:gap-[80px]">
              <div className="w-full sm:w-1/2 sm:px-2">
                <div className="py-4">
                  <label htmlFor="reason" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">'What do you want to Advertise?'</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setReason)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
                    name="reason"
                    value={reason}
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:px-2">
                <div className="py-4">
                  <label htmlFor="amount" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">How many bottles?</label>
                  <br />
                  <input
                    onChange={(e) => handleChange(e, setAmount)}
                    className="font-montserrat text-[16px] sm:text-[22px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
                    name="amount"
                    value={amount}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:gap-[80px]">
              <div className="w-full sm:w-1/2 sm:px-2">
                <div className="py-4">
                  <label htmlFor="message" className="font-montserrat text-[16px] sm:text-[22px] not-italic font-normal leading-normal">Message</label>
                    <br />
                    <textarea
                      onChange={(e) => handleChange(e, setMessage)}
                      className="font-montserrat text-[16px] sm:text-[22px] h-[128px] text-black not-italic font-normal leading-normal px-2 py-2 rounded-md border-none mt-2 w-[280px] sm:w-[440px]"
                      name="message"
                      value={message}
                      type="text"
                    />
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-[#FC581C] font-inter w-[280px] sm:w-[190px] h-[70px] px-[64px] py-[20px] text-[24px] text-[#FFF] rounded-[9px] hover:bg-orange-300 hover:cursor-pointer active:bg-white active:text-orange-500"
                >
                  {isSubmitting ? "Submitting..." : "Send"}
                </button>
              </div>
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
  );
}

export default Subscribe;
