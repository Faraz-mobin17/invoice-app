import { mongoose, Schema } from "mongoose";

// Define schema for BillFrom
const billFromSchema = new Schema(
  {
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: timestamps }
);

// Define schema for BillTo
const billToSchema = new Schema(
  {
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
    invoiceDate: { type: Date, required: true },
    paymentTerms: { type: String, required: true },
    projectDescription: { type: String, required: true },
  },
  { timestamps: timestamps }
);

// Define schema for ItemList
const itemSchema = new Schema(
  {
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: timestamps }
);

// Define main schema for the entire document
const invoiceSchema = new Schema({
  billFrom: { type: billFromSchema, required: true },
  billTo: { type: billToSchema, required: true },
  itemList: { type: [itemSchema], required: true },
});

// Create a model using the schema & Export the model
export const Invoice = mongoose.model("Invoice", invoiceSchema);
