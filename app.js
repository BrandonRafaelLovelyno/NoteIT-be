// Importing supporting packages
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

// Implementing supporting packages
const express = require("express");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());

// Allowing cross origin request
const cors = require("cors");
app.use(
  cors({
    origin: "https://note-it-fe.vercel.app",
    credentials: true,
  })
);

// Connecting the database
const connectDB = require("./config/database");
connectDB(process.env.MONGO_URI);

// Implementing the main router
const makeMainRouter = require("./routes");
const mainRouter = makeMainRouter();

app.use("/", mainRouter);

// Implementing the error handler
const errorHandler = require("./middlewares/error");
app.use(errorHandler);

module.exports = app;
