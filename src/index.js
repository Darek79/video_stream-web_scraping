const express = require("express");
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const util = require("util");
const cors = require("cors");
const app = express();
const {
  fetchDataGoogle,
  fetchData,
  globalErrorHandler,
  catchAsync,
} = require("./helper/utils");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
// app.use("/", express.static(path.join(__dirname, "..", "public")));

app.get(
  "/",
  catchAsync(async (req, res, next) => {
    // console.log(fs.existsSync(path.join(__dirname, "..", "log.txt")));
    // console.log(fs.existsSync(path.join(__dirname, "..", "log.txt")));
    res.status(200).json({msg: "ok1"});
  })
);
app.get("/video/:channelId/:nr", async (req, res, next) => {
  console.log(req.params.channelId, req.params.nr);
  const d = await fetchDataGoogle(req.params.channelId, req.params.nr);
  // console.log(d);
  res.status(200).json({d});
});
app.get("/site", async (req, res, next) => {
  console.log(req.query.q);
  const selectors = [
    {p: "raptastisch", s: ".rpwe-title>a"},
    {p: "hiphopdx", s: ".text-wrap>a"},
  ];
  console.log(`https://www.${req.query.q}`);
  const d = await fetchData(`https://www.${req.query.q}`);
  console.log(d, "output");

  res.status(200).json({d: "ok"});
});

app.use("*", (req, res, next) => {
  res.status(500).json(null);
});
app.use(globalErrorHandler);
const server = app.listen(8000, () => console.log("server is up"));

process.on("unhandledRejection", (err) => {
  server.close(() => process.exit(1));
});
