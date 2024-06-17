const mongoose = require("mongoose");

mongoose.connect("");

const LandingPageFormSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  MobileNumber: String,
  City: String,
});

const DistributeFormSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  MobileNumber: String,
  City: String,
  CompanyName: String,
  TypeOfBusiness: String,
  ShippingAddress: String,
  Amount: Number,
});

const AdvertisementFormSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  MobileNumber: String,
  City: String,
  CompanyName: String,
  TypeOfBusiness: String,
  WhatDoYouWantAdvertise: String,
  Budget: Number,
  Message: String,
});

const ContactUsFormSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  MobileNumber: String,
  City: String,
  Subject: String,
  Message: String,
});

const AdvertisementForm = mongoose.model(
  "AdvertisementForm",
  AdvertisementFormSchema
);
const ContactUsForm = mongoose.model("ContactUsForm", ContactUsFormSchema);
const DistributeForm = mongoose.model("DistributeForm", DistributeFormSchema);
const LandingPageForm = mongoose.model(
  "LandingPageForm",
  LandingPageFormSchema
);

module.exports = {
  LandingPageForm,
  DistributeForm,
  AdvertisementForm,
  ContactUsForm,
};
