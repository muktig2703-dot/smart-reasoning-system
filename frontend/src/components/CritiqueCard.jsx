function CritiqueCard({ critic }) {
    if (!critic) return null;

    // Handle both possible response formats
    const data = critic.critic || critic;

    return (
        <div className="critique-section">

            <h2>⚠️ Critique</h2>

            <div className="critique-card">
                <h3>Assumptions</h3>

                <ul>
                    {data.assumptions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="critique-card">
                <h3>Missing Information</h3>

                <ul>
                    {data.missing_information.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="critique-card">
                <h3>Risks</h3>

                <ul>
                    {data.risks.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="critique-card">
                <h3>Follow-up Questions</h3>

                <ul>
                    {data.follow_up_questions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default CritiqueCard;