import { useState } from "react";

const studentsList = [
  { id: 1, name: "Ali" },
  { id: 2, name: "ahmed" },
  { id: 3, name: "ismail" },
  { id: 4, name: "ibrahim" },
];

export default function AttendanceApp() {
  // Attendance state: {studentId: "Present" | "Absent"}
  const [attendance, setAttendance] = useState({});

  const toggleAttendance = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: prev[id] === "Present" ? "Absent" : "Present",
    }));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "Arial" }}>
      <h2>Student Attendance</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {studentsList.map((student) => {
          const status = attendance[student.id] || "Absent";
          return (
            <li
              key={student.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 12px",
                borderBottom: "1px solid #ccc",
              }}
            >
              <span>{student.name}</span>
              <button
                onClick={() => toggleAttendance(student.id)}
                style={{
                  backgroundColor: status === "Present" ? "green" : "red",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                {status}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
