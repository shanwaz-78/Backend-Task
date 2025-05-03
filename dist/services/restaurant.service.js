"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllrestaurantService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const stream_chain_1 = require("stream-chain");
const stream_json_1 = require("stream-json");
const StreamArray_1 = require("stream-json/streamers/StreamArray");
const Restaurant_model_1 = require("../model/Restaurant.model");
const getAllrestaurantService = async (queryObj) => {
    const { page = 1, limit = 10 } = queryObj;
    const skip = (page - 1) * limit;
    const jsonFilePath = path_1.default.join(__dirname, "../../restaurants.json");
    try {
        const total = await Restaurant_model_1.RestaurantModel.estimatedDocumentCount();
        if (total === 0) {
            const pipeline = (0, stream_chain_1.chain)([
                fs_1.default.createReadStream(jsonFilePath),
                (0, stream_json_1.parser)(),
                (0, StreamArray_1.streamArray)(),
            ]);
            const BATCH_SIZE = 10000;
            let batch = [];
            for await (const { value } of pipeline) {
                console.log("Processing value:", value);
                batch.push(value);
                if (batch.length >= BATCH_SIZE) {
                    await Restaurant_model_1.RestaurantModel.insertMany(batch, { ordered: false });
                    batch = [];
                }
            }
            if (batch.length > 0) {
                console.log("Inserting final batch:", batch.length);
                await Restaurant_model_1.RestaurantModel.insertMany(batch, { ordered: false });
            }
        }
        else {
            const data = await Restaurant_model_1.RestaurantModel.find().skip(skip).limit(limit);
            return {
                data,
                page,
            };
        }
    }
    catch (error) {
        console.error("Error while getting restaurant details", error);
        throw new Error("Failed to fetch restaurant data");
    }
};
exports.getAllrestaurantService = getAllrestaurantService;
