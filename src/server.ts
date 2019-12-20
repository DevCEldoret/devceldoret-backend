import express from "express";
import bodyParser from "body-parser";
import EventRoute from "./routes/event-route";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// added by me for testing
app.get("/", (request, response) => {
  response.json({ message: "Server starts successfully!" });
});

// routes
app.use("/api/v1/event", EventRoute);

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  next();
});

app.set("port", process.env.PORT || "3000");
app.listen(process.env.PORT || "3000", () => {
  console.log("app is running on port ", process.env.PORT || "3000");
});

export default app;
