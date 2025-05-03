"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModel = void 0;
const mongoose_1 = require("mongoose");
const restaurantSchema = new mongoose_1.Schema({
    address: {
        building: { type: String },
        street: { type: String },
    },
    cuisine: { type: String, required: true },
    grades: {
        type: [mongoose_1.Schema.Types.Mixed],
        default: [],
    },
    name: { type: String, required: true },
}, {
    timestamps: true,
});
restaurantSchema.index({ restaurant_id: 1 });
exports.RestaurantModel = (0, mongoose_1.model)("Restaurant", restaurantSchema);
