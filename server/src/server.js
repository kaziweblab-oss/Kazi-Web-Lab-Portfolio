import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5001;
const DBURL = process.env.DBURL;
const HOSTNAME = process.env.HOSTNAME;

app.listen(PORT, HOSTNAME, async () => {
  await connectDB(DBURL);
  console.log(
    `Your server is Successfully start at http://${HOSTNAME}:${PORT}`,
  );
});
