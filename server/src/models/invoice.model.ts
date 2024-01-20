import mongoose, { Document, Schema, Model } from "mongoose";

// Interface for BillFrom
interface IBillFrom {
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
}

// Interface for BillTo
interface IBillTo {
  clientName: string;
  clientEmail: string;
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
  invoiceDate: Date;
  paymentTerms: string;
  projectDescription: string;
}

// Interface for Item
interface IItem {
  itemName: string;
  quantity: number;
  price: number;
  total: number;
}

// Interface for Invoice Document
interface IInvoiceDocument extends Document {
  billFrom: IBillFrom;
  billTo: IBillTo;
  itemList: IItem[];
}

// Interface for Invoice Model
interface IInvoiceModel extends Model<IInvoiceDocument> {}

// Define schema for BillFrom
const billFromSchema: Schema<IBillFrom> = new Schema(
  {
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);

// Define schema for BillTo
const billToSchema: Schema<IBillTo> = new Schema(
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
  { timestamps: true }
);

// Define schema for ItemList
const itemSchema: Schema<IItem> = new Schema(
  {
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

// Define main schema for the entire document
const invoiceSchema: Schema<IInvoiceDocument> = new Schema({
  billFrom: { type: billFromSchema, required: true },
  billTo: { type: billToSchema, required: true },
  itemList: { type: [itemSchema], required: true },
});

// Create a model using the schema & Export the model
export const Invoice: Model<IInvoiceDocument> = mongoose.model<
  IInvoiceDocument,
  IInvoiceModel
>("Invoice", invoiceSchema);
