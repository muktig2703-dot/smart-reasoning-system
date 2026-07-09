function ConfidenceMeter({ confidence }) {
    return (
        <section className="confidence-section">
            <h2>🎯 Confidence</h2>

            <div className="confidence-bar">
                <div
                    className="confidence-fill"
                    style={{ width: `${confidence}%` }}
                />
            </div>

            <p>{confidence}%</p>
        </section>
    );
}

export default ConfidenceMeter;