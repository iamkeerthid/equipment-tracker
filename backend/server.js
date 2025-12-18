const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "./equipment.json";

const readData = () =>
  JSON.parse(fs.readFileSync(FILE, "utf8") || "[]");

const writeData = data =>
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

// GET all equipment
app.get("/api/equipment", (req, res) => {
  res.json(readData());
});

// ADD equipment
app.post("/api/equipment", (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  if (!name || !type || !status || !lastCleaned) {
    return res.status(400).json({ message: "All fields required" });
  }

  const data = readData();
  data.push({ id: uuid(), name, type, status, lastCleaned });
  writeData(data);

  res.json({ message: "Added successfully" });
});

// UPDATE equipment
app.put("/api/equipment/:id", (req, res) => {
  const data = readData();
  const index = data.findIndex(e => e.id === req.params.id);

  if (index === -1) return res.status(404).json({ message: "Not found" });

  data[index] = { ...data[index], ...req.body };
  writeData(data);

  res.json({ message: "Updated successfully" });
});

// DELETE equipment
app.delete("/api/equipment/:id", (req, res) => {
  const data = readData().filter(e => e.id !== req.params.id);
  writeData(data);
  res.json({ message: "Deleted successfully" });
});

app.listen(5000, () =>
  console.log("Backend running on http://localhost:5000")
);
