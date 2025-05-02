import express, { Application } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import routes from "./routes/index";
import { createDBConnection } from "./config/db";

const app: Application = express();

const API_LIMIT: string = process.env.API_REQUEST_LIMIT || "200";
const MONGO_URI: string = process.env.MONGO_URI || "";

app.use(mongoSanitize());
app.use(
  rateLimit({
    windowMs: 30 * 60 * 1000,
    limit: parseInt(API_LIMIT, 10),
    standardHeaders: true,
    legacyHeaders: false,
    message: "API request limit reached. Please try again after 30 minutes.",
  })
);
app.use(express.json());
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

createDBConnection(MONGO_URI);
app.use("/api", routes.restaurantRoute);
app.get("/", (_, res) => {
  res.status(200).json({ messsage: `API deployed successfully.` });
});

export { app };
