import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import logging from "./middleware/logging.js";
import validateAssignmentData from "./middleware/assignmentValidation.js";

const app = express();
const port = 4000;

app.use(express.json()); // สำหรับประมวลผล JSON body
app.use(express.urlencoded({ extended: true })); // สำหรับประมวลผล URL-encoded body

app.use(logging);

app.use(bodyParser.json());
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
