import { app } from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5001;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";
const DBURL = process.env.DBURL;

app.listen(PORT, HOSTNAME, async () => {
  await connectDB(DBURL);
  console.log(
    `Your server is Successfully start at http://${HOSTNAME}:${PORT}`,
  );
});
