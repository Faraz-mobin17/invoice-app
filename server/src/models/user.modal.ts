import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for User Document
interface IUserDocument extends Document {
  username: string;
  email: string;
  password: string;
  dateOfBirth: Date;
}

// Interface for User Model
interface IUserModel extends Model<IUserDocument> {}

// Create a user schema
const userSchema: Schema<IUserDocument> = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    // You can add more fields like 'firstName', 'lastName', etc., as needed
  },
  {
    timestamps: true, // This will automatically add createdAt and updatedAt timestamps
  }
);

// Create a User model using the schema
export const User: Model<IUserDocument> = mongoose.model<
  IUserDocument,
  IUserModel
>("User", userSchema);
