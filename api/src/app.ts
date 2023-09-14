import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(router);
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
