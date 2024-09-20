const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
const FormSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  MobileNumber: String,
  City: String,
  CompanyName: String,
  TypeOfBusiness: String,
  WhatDoYouWantAdvertise: String,
  NoOfBottles: Number,
});

const Form = mongoose.model("Form", FormSchema);

module.exports = {
  Form,
};
