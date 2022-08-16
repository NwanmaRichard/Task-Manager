import mongoose from "mongoose";
import config from "config";
import app from "./app";

const port = config.get<number>("port");
const dbUri = config.get<string>("dbUri");

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);
});