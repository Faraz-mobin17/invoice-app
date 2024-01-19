import { mongoose, Schema } from "mongoose";

// Create a user schema
const userSchema = new Schema(
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
export const User = mongoose.model("User", userSchema);
