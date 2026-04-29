function StatsPanel({ total, passed, avg }) {
  return (
    <div className="stats-panel">
      <div className="stat-card">
        <span className="stat-label">TOTAL</span>
        <span className="stat-value accent">{total}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">PASSED</span>
        <span className="stat-value accent">{passed}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">AVG SCORE</span>
        <span className="stat-value accent">{avg}</span>
      </div>
    </div>
  );
}

export default StatsPanel;
