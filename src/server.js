import "@babel/polyfill";
import express from "express";
import bodyParser from "body-parser";
import helper from "./Utils/helper";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// added by me for testing
app.get("/", (request, response) => {
  response.json({ message: "Server starts successfully!" });
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  next();
});

app.set("port", helper.PORT);
app.listen(helper.PORT, () => {
  console.log("app is running on port ", helper.PORT);
});

export default app;
