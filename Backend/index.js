const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { LandingPageForm, DistributeForm } = require("./db");
const zod = require("zod");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//*Home Route
// LandingForm Validation
const formSchema = zod.object({
  FirstName: zod.string(),
  LastName: zod.string(),
  MobileNumber: zod.string(),
  City: zod.string(),
});

app.post("/", async (req, res) => {
  const { FirstName, LastName, MobileNumber, City } = req.body;
  try {
    if (!formSchema.safeParse(req.body).success) {
      res.status(400).json({ message: "Invalid Form Data" });
    }

    // const mobileNumber = parsePhoneNumberFromString(MobileNumber, "IN");
    // if (!mobileNumber || !phoneNumber.isValid()) {
    //   res.status(400).json({ message: "Invalid Mobile Number" });
    //   throw new Error("Invalid Mobile Number");
    // }

    if (!FirstName || !LastName || !City) {
      res.status(400).json({ message: "Please Fill All Fields" });
    }

    const existingMobileNumber = await LandingPageForm.findOne({
      MobileNumber,
    });
    if (existingMobileNumber) {
      res.status(409).json({ message: "Mobile Number already exists" });
    }

    const form = new LandingPageForm({
      FirstName,
      LastName,
      MobileNumber,
      City,
    });
    await form.save();
    res.status(201).json({ message: "Form Submitted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//* Distribute Route

// DistributeForm Validation
const distributeFormSchema = zod.object({
  FirstName: zod.string(),
  LastName: zod.string(),
  MobileNumber: zod.string(),
  City: zod.string(),
  CompanyName: zod.string().optional(),
  TypeOfBusiness: zod.string().optional(),
  ShippingAddress: zod.string(),
  Amount: zod.number(),
});

app.post("/distribute", async (req, res) => {
  const {
    FirstName,
    LastName,
    MobileNumber,
    City,
    CompanyName,
    TypeOfBusiness,
    ShippingAddress,
    Amount,
  } = req.body;
  try {
    if (!distributeFormSchema.safeParse(req.body).success) {
      res.status(400).json({ message: "Invalid Form Data" });
    }

    // const mobileNumber = parsePhoneNumberFromString(MobileNumber, "IN");
    // if (!mobileNumber || !phoneNumber.isValid()) {
    //   res.status(400).json({ message: "Invalid Mobile Number" });
    //   throw new Error("Invalid Mobile Number");
    // }

    if (!FirstName || !LastName || !City || !ShippingAddress || !Amount) {
      res.status(400).json({ message: "Please Fill All Fields" });
    }

    const existingMobileNumber = await DistributeForm.findOne({
      MobileNumber,
    });
    if (existingMobileNumber) {
      res.status(409).json({ message: "Mobile Number already exists" });
    }

    const form = new DistributeForm({
      FirstName,
      LastName,
      MobileNumber,
      City,
      CompanyName,
      TypeOfBusiness,
      ShippingAddress,
      Amount,
    });
    await form.save();
    res.status(201).json({ message: "Form Submitted Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: "An unexpected error occurred" });
});

app.listen(3000);
