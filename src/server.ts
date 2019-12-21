import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import router from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// CORS
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE",
  );
  next();
});

// routes
app.use("/api/v1/", router);

// added by me for testing
app.get("*", (_req, res) => {
  res.status(501).json({
    status: 'error',
    error: 'Method not implemented',
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    status: 'error',
    error: 'Oops! something went wrong with your request.',
  });
})


app.set("port", process.env.PORT || "3000");
app.listen(process.env.PORT || "3000", () => {
  console.log("app is running on port ", process.env.PORT || "3000");
});

export default app;
