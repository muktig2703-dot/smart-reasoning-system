function AnalysisCard({ analysis }) {
    if (!analysis) return null;

    // Handle both formats:
    // analysis = { analysis: [...] }
    // analysis = [...]
    const analysisList = analysis.analysis || analysis;

    return (
        <div className="analysis-section">
            <h2>🧠 Analysis</h2>

            {analysisList.map((item, index) => (
                <div
                    key={index}
                    className="analysis-card"
                >
                    <h3>{item.step}</h3>

                    <p>{item.reasoning}</p>
                </div>
            ))}
        </div>
    );
}

export default AnalysisCard;