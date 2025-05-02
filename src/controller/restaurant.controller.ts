import { Request, Response } from "express";
import services from "../services/index";

const getAllrestaurants = async (req: Request, res: Response) => {
  console.log(req.query);
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await services.getAllrestaurantService({
      page,
      limit,
    });

    res.status(200).json({
      success: true,
      message: "Restaurants fetched successfully",
      ...result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export default { getAllrestaurants };
