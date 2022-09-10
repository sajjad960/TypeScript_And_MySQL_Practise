import express from "express";

// controller
import userController from "../controllers/userController";

const router = express.Router();

router.post("/").post(userController.createUser);

//Declare router as a userRouter
const userRouter = router;

export = userRouter;