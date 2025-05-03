"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const index_1 = __importDefault(require("./routes/index"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
exports.app = app;
const API_LIMIT = process.env.API_REQUEST_LIMIT || "200";
const MONGO_URI = process.env.MONGO_URI || "";
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, express_rate_limit_1.default)({
    windowMs: 30 * 60 * 1000,
    limit: parseInt(API_LIMIT, 10),
    standardHeaders: true,
    legacyHeaders: false,
    message: "API request limit reached. Please try again after 30 minutes.",
}));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*", methods: ["GET", "POST"] }));
(0, db_1.createDBConnection)(MONGO_URI);
app.use("/api", index_1.default.restaurantRoute);
app.get("/", (_, res) => {
    res.status(200).json({ messsage: `API deployed successfully.` });
});
