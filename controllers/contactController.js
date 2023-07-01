import contactUsModels from "../models/contactUsModels.js";
import { contactValidationSchema } from "../validator/validations.js";

export const contactUsController = async (req, res) => {
   const { name, email, mobileNumber, message, location } = req.body;
  try {

    const { error, value } = contactValidationSchema.validate({email});
    if (error) return res.status(400).send({ error: error.message });

    const contact = new contactUsModels({
      name,
      email,
      mobileNumber,
      message,
      location
    });
    await contact.save();

    const responseData = {
      success: true,
      message: "contact form submitted successfully",
      data: {
        name: contact.name,
        email: contact.email,
        mobileNumber: contact.mobileNumber,
        message: contact.message,
        location:contact.location,
        createdAt: contact.createdAt,
        updatedAt:contact.updatedAt,
      },
    };
    res.status(200).send(responseData);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "an errored while sumitting the contact form",
    });
  }
};


