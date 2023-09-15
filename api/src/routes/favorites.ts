import { Router } from "express";
import { postFavoriteUser, deleteFavoriteUser, getAllFavorites } from "../controllers/favorites";

const router = Router();

router.post("/", postFavoriteUser);
router.get("/", getAllFavorites)
router.delete("/:ardaId", deleteFavoriteUser);

export { router };
