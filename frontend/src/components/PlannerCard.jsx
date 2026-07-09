function PlannerCard({ steps }) {
    return (
        <div className="planner-section">
            <h2>📋 Plan</h2>

            {steps.map((step, index) => (
                <div
                    key={index}
                    className="planner-card"
                >
                    <strong>Step {index + 1}</strong>

                    <p>{step}</p>
                </div>
            ))}
        </div>
    );
}

export default PlannerCard;