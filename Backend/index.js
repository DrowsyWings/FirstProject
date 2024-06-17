const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  LandingPageForm,
  DistributeForm,
  ContactUsForm,
  AdvertisementForm,
} = require("./db");
const zod = require("zod");

const app = express();
app.use(cors());
app.use(bodyParser.json());

//*Home Route
// LandingForm Validation
const formSchema = zod.object({
  FirstName: zod.string(),
  LastName: zod.string(),
  MobileNumber: zod.string().min(10),
  City: zod.string(),
});

app.post("/", async (req, res) => {
  const { FirstName, LastName, MobileNumber, City } = req.body;
  // console.log(FirstName, LastName, MobileNumber, City);
  try {
    if (!formSchema.safeParse(req.body).success) {
      res.status(400).json({ message: "Invalid Form Data" });
    }

    if (!FirstName || !LastName || !MobileNumber || !City) {
      res.status(400).json({ message: "Please Fill All Fields" });
    }

    const form = new LandingPageForm({
      FirstName,
      LastName,
      MobileNumber,
      City,
    });
    await form.save();
    res.status(200).json({ message: "Form Submitted Successfully" });
  } catch (error) {
    console.log("Error", error);
    // res.status(400).json({ message: error.message });
  }
});

//* Distribute Route
// DistributeForm Validation
const distributeFormSchema = zod.object({
  FirstName: zod.string(),
  LastName: zod.string(),
  MobileNumber: zod.string().min(10),
  City: zod.string(),
  CompanyName: zod.string(),
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
  console.log(
    FirstName,
    LastName,
    MobileNumber,
    City,
    CompanyName,
    TypeOfBusiness,
    ShippingAddress,
    Amount
  );
  try {
    if (!distributeFormSchema.safeParse(req.body).success) {
      res.status(400).json({ message: "Invalid Form Data" });
    }

    if (
      !FirstName ||
      !LastName ||
      !City ||
      !MobileNumber ||
      !ShippingAddress ||
      !Amount
    ) {
      res.status(400).json({ message: "Please Fill All Fields" });
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
    res.status(200).json({ message: "Form Submitted Successfully" });
  } catch (error) {
    console.log("Error", error);
  }
});

//* Advertisement Route
// AdvertisementForm Validation
const advertisementFormSchema = zod.object({
  FirstName: zod.string(),
  LastName: zod.string(),
  MobileNumber: zod.string().min(10),
  City: zod.string(),
  CompanyName: zod.string(),
  TypeOfBusiness: zod.string().optional(),
  WhatDoYouWantAdvertise: zod.string(),
  Budget: zod.number(),
  Message: zod.string().optional(),
});

app.post("/advertise", async (req, res) => {
  const {
    FirstName,
    LastName,
    MobileNumber,
    City,
    CompanyName,
    TypeOfBusiness,
    WhatDoYouWantAdvertise,
    Budget,
    Message,
  } = req.body;
  try {
    if (!advertisementFormSchema.safeParse(req.body).success) {
      res.status(400).json({ message: "Invalid Form Data" });
    }

    if (
      !FirstName ||
      !LastName ||
      !City ||
      !MobileNumber ||
      !WhatDoYouWantAdvertise ||
      !Budget
    ) {
      res.status(400).json({ message: "Please Fill All Fields" });
    }

    const form = new AdvertisementForm({
      FirstName,
      LastName,
      MobileNumber,
      City,
      CompanyName,
      TypeOfBusiness,
      WhatDoYouWantAdvertise,
      Budget,
      Message,
    });
    await form.save();
    res.status(200).json({ message: "Form Submitted Successfully" });
  } catch (error) {
    console.log("Error", error);
  }
});

//* Contact Route
// ContactUsForm Validation
const contactFormSchema = zod.object({
  FirstName: zod.string(),
  LastName: zod.string(),
  MobileNumber: zod.string().min(10),
  Subject: zod.string(),
  Message: zod.string().optional(),
});

app.post("/contact", async (req, res) => {
  const { FirstName, LastName, MobileNumber, Subject, Message } = req.body;
  try {
    if (!contactFormSchema.safeParse(req.body).success) {
      res.status(400).json({ message: "Invalid Form Data" });
    }

    if (!FirstName || !LastName || !MobileNumber || !Subject) {
      res.status(400).json({ message: "Please Fill All Fields" });
    }

    const form = new ContactUsForm({
      FirstName,
      LastName,
      MobileNumber,
      Subject,
      Message,
    });
    await form.save();
    res.status(200).json({ message: "Form Submitted Successfully" });
  } catch (error) {
    console.log("Error", error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: "An unexpected error occurred" });
});

app.listen(3000);
