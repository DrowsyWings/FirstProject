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

const CouponSchema = new mongoose.Schema({
  couponId: String,
  imageUrl: String,
  description: String,
  visitCount: { type: Number, default: 0 },
});

const Coupon = mongoose.model("Coupon", CouponSchema);

const Form = mongoose.model("Form", FormSchema);

module.exports = {
  Form,
  Coupon,
};
