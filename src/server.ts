require('custom-env').env()
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import "reflect-metadata";

const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.json({ message: "Server starts successfully!" });
});

// routes
app.use("/api/v1", routes);

// CORS
app.use(cors());

app.set("port", process.env.PORT || "3000");
app.listen(process.env.PORT || "3000", () => {
  console.log("app is running on port ", process.env.PORT || "3000");
});

export default app;
