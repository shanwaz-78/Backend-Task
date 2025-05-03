"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../services/index"));
const getAllrestaurants = async (req, res) => {
    console.log(req.query);
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const result = await index_1.default.getAllrestaurantService({
            page,
            limit,
        });
        res.status(200).json({
            success: true,
            message: "Restaurants fetched successfully",
            ...result,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
exports.default = { getAllrestaurants };
