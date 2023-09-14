import { Router } from "express";
import { getUserByName, getUsersByStreams } from "../controllers/torre";

const router = Router();

router.post("/", getUsersByStreams);
router.get("/:name", getUserByName);

export { router };
