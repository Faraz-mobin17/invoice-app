import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connection.db.js";

dotenv.config({
  path: "../env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`listening on PORT: ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log("MongoDB Connection failed", err));
