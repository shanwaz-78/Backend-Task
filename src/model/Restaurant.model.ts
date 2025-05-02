import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
  {
    address: {
      building: { type: String },
      street: { type: String },
    },
    cuisine: { type: String, required: true },
    grades: {
      type: [Schema.Types.Mixed],
      default: [],
    },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

restaurantSchema.index({ restaurant_id: 1 });

export const RestaurantModel = model("Restaurant", restaurantSchema);
