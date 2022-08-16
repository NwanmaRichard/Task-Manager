import express, { Request, Response } from "express";
import path from "path";
import taskRoute from "./routes/taskRoute";
import { notFound } from "./middlewares/not-found";
import { errorHandlerMiddleware } from "./middlewares/error-handler";
const app = express();

app.use(express.static(path.join(__dirname, "public")));
//body parser
app.use(express.json());

app.use("/api/v1/tasks", taskRoute);

app.use(notFound)
app.use(errorHandlerMiddleware)

export default app;
