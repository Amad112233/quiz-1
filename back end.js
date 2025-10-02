// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample students data
let students = [
  { id: 1, name: "Ali" },
  { id: 2, name: "ahmed" },
  { id: 3, name: "ismail" },
  { id: 4, name: "ibrahim"},
];

// Attendance data: { studentId: "Present" | "Absent" }
let attendance = {};

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Get attendance status for all students
app.get("/attendance", (req, res) => {
  res.json(attendance);
});

// Update attendance for a student
app.post("/attendance/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const { status } = req.body;

  if (!["Present", "Absent"].includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  const studentExists = students.find((s) => s.id === studentId);
  if (!studentExists) {
    return res.status(404).json({ error: "Student not found" });
  }

  attendance[studentId] = status;
  res.json({ studentId, status });
});

app.listen(port, () => {
  console.log(`Attendance backend running on http://localhost:${port}`);
});
