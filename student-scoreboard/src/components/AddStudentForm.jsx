import { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!name.trim()) {
      setError("Student name is required.");
      return;
    }
    if (score === "" || isNaN(score) || score < 0 || score > 100) {
      setError("Score must be between 0 and 100.");
      return;
    }
    onAdd(name.trim(), score);
    setName("");
    setScore("");
    setError("");
  };

  return (
    <div className="card form-card">
      <div className="card-header">
        <span className="dot"></span>
        REGISTER STUDENT
        <span className="card-label">NEW ENTRY</span>
      </div>
      <div className="form-row">
        <input
          className="input"
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <input
          className="input input-score"
          type="number"
          placeholder="Score (0-100)"
          min={0}
          max={100}
          value={score}
          onChange={(e) => setScore(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button className="btn-add" onClick={handleAdd}>
          + ADD
        </button>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

export default AddStudentForm;
