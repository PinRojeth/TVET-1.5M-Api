import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/error-handlers";
import routes from "./routes";
import * as models from "./models";

const app = express();

app.set('trust proxy', true);

applyMiddleware(middleware, app);
applyRoutes(routes, app);
applyMiddleware(errorHandlers, app);

const { PORT = 3000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
    console.log(`Server is running http://localhost:${PORT}...`)
);

models.connect();
process.env.TZ = 'Asia/Phnom_Penh'