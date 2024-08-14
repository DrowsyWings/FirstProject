const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/right2water");

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
