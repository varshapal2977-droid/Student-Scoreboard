import { useState } from "react";

function StudentRow({ index, student, onUpdateScore, onRemove }) {
  const [editScore, setEditScore] = useState(student.score);
  const isPassing = student.score >= 40;

  const handleUpdate = () => {
    const val = Number(editScore);
    if (!isNaN(val) && val >= 0 && val <= 100) {
      onUpdateScore(student.id, val);
    }
  };

  return (
    <tr className="student-row">
      <td className="col-index">{index}</td>
      <td className="col-name">{student.name}</td>
      <td className="col-score">{student.score}</td>
      <td className="col-status">
        <span className={`badge ${isPassing ? "pass" : "fail"}`}>
          {isPassing ? "PASS" : "FAIL"}
        </span>
      </td>
      <td className="col-update">
        <div className="update-row">
          <input
            className="input input-mini"
            type="number"
            min={0}
            max={100}
            value={editScore}
            onChange={(e) => setEditScore(e.target.value)}
          />
          <button className="btn-update" onClick={handleUpdate}>
            SET
          </button>
        </div>
      </td>
      <td className="col-remove">
        <button className="btn-remove" onClick={() => onRemove(student.id)}>
          ✕
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
