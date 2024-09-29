const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Form } = require("./db/index");
const { z } = require("zod");

const app = express();
app.use(cors({
  origin: "https://aquafree.co.in",
  methods: "GET,POST,PUT,DELETE",
  credential: true
}));



app.use(bodyParser.json());

app.use('/api',(req,res,next)=>{
  next();
})

// Form Validation Schema
const formSchema = z.object({
  FirstName: z.string().min(1, "First Name is required"),
  LastName: z.string().min(1, "Last Name is required"),
  MobileNumber: z
    .string()
    .min(10, "Mobile Number must be at least 10 characters"),
  City: z.string().min(1, "City is required"),
  CompanyName: z.string().optional(),
  TypeOfBusiness: z.string().optional(),
  WhatDoYouWantAdvertise: z.string().optional(),
  NoOfBottles: z.number().optional(),
});

//Form Submission Handler
const handleFormSubmission = async (req, res) => {
  try {
    const validatedData = formSchema.parse(req.body);
    const form = new Form(validatedData);
    await form.save();
    res.status(200).json({ message: "Form Submitted Successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .json({ message: "Invalid Form Data", errors: error.errors });
    } else {
      console.error("Error:", error);
      res
        .status(500)
        .json({ message: "An error occurred while processing your request" });
    }
  }
};

// Routes
app.post("/", handleFormSubmission);
app.post("/distribute", handleFormSubmission);
app.post("/advertise", handleFormSubmission);
app.post("/contact", handleFormSubmission);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "An unexpected error occurred" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
