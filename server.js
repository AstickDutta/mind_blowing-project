import express from "express"
import color from "colors"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import connectDB from './config/db.js';

const app = express();


//dot env config
dotenv.config();
//mongoodb connection
connectDB()

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/route",routes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(color.bold.bgGreen(`node server running in ${process.env.DEV_MODE} modeOn Port ${process.env.PORT}`));
});