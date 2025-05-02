import { Router } from "express";
import controller from "../controller/index";

const router: Router = Router();

router.get("/restaurants", controller.getAllrestaurants.getAllrestaurants);

export default router;
