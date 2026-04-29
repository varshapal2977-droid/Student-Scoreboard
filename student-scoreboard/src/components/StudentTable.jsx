import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdateScore, onRemove }) {
  return (
    <div className="card table-card">
      <div className="card-header">
        <span className="dot"></span>
        STUDENT RECORDS
        <span className="card-label">{students.length} entries</span>
      </div>
      {students.length === 0 ? (
        <p className="empty-msg">No students registered yet.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>SCORE</th>
              <th>STATUS</th>
              <th>UPDATE</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                key={student.id}
                index={index + 1}
                student={student}
                onUpdateScore={onUpdateScore}
                onRemove={onRemove}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentTable;
