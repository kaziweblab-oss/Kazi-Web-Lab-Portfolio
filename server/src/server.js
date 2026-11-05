import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5001;
const DBURL = process.env.DBURL;

app.listen(PORT, async () => {
  await connectDB(DBURL);
  console.log(
    `Your server is Successfully start.`,
  );
});
