/**
 * Required External Modules
 */

import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { itemsRouter } from "./items/items.router"
import { errorHandler } from "./middleware/error.middleware"
import { notFoundHandler } from "./middleware/not-found.middleware"
 
dotenv.config()


/**
 * App Variables
 */

const app = express()



/**
 *  App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use("/api/menu/items", itemsRouter)

app.use(errorHandler);
app.use(notFoundHandler);



export default app