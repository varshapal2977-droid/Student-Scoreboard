import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import StatsPanel from "./components/StatsPanel";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Alice Johnson", score: 85 },
  { id: 2, name: "Bob Smith", score: 32 },
  { id: 3, name: "Carol White", score: 72 },
  { id: 4, name: "David Brown", score: 55 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: Number(newScore) } : s))
    );
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const totalStudents = students.length;
  const passedStudents = students.filter((s) => s.score >= 40).length;
  const avgScore =
    totalStudents > 0
      ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / totalStudents)
      : 0;

  return (
    <div className="app">
      <div className="scanline"></div>
      <div className="container">
        <Header />
        <AddStudentForm onAdd={addStudent} />
        <StatsPanel total={totalStudents} passed={passedStudents} avg={avgScore} />
        <StudentTable
          students={students}
          onUpdateScore={updateScore}
          onRemove={removeStudent}
        />
      </div>
    </div>
  );
}

export default App;
