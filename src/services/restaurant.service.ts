import fs from "fs";
import path from "path";
import { chain } from "stream-chain";
import { parser } from "stream-json";
import { streamArray } from "stream-json/streamers/StreamArray";
import { RestaurantModel } from "../model/Restaurant.model";
import { PaginationTypes } from "../types/restauranst.types";

export const getAllrestaurantService = async (queryObj: PaginationTypes) => {
  const { page = 1, limit = 10 } = queryObj;
  const skip = (page - 1) * limit;
  const jsonFilePath = path.join(__dirname, "../../restaurants.json");

  try {
    const total = await RestaurantModel.estimatedDocumentCount();

    if (total === 0) {
      const pipeline = chain([
        fs.createReadStream(jsonFilePath),
        parser(),
        streamArray(),
      ]);

      const BATCH_SIZE = 10000;
      let batch: any[] = [];

      for await (const { value } of pipeline) {
        console.log("Processing value:", value);
        batch.push(value);
        if (batch.length >= BATCH_SIZE) {
          await RestaurantModel.insertMany(batch, { ordered: false });
          batch = [];
        }
      }

      if (batch.length > 0) {
        console.log("Inserting final batch:", batch.length);
        await RestaurantModel.insertMany(batch, { ordered: false });
      }
    } else {
      const data = await RestaurantModel.find().skip(skip).limit(limit);

      return {
        data,
        page,
      };
    }
  } catch (error) {
    console.error("Error while getting restaurant details", error);
    throw new Error("Failed to fetch restaurant data");
  }
};
