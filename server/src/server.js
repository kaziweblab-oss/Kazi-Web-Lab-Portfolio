import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const DBURL = process.env.DBURL;

app.listen( async () => {
  await connectDB(DBURL);
  console.log(
    `Your server is Successfully start.`,
  );
});
