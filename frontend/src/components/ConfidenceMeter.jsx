function ConfidenceMeter({ confidence }) {

    return (
        <div className="confidence-section">

            <h3>Confidence</h3>

            <progress
                value={confidence}
                max="100"
            />

            <p>{confidence}%</p>

        </div>
    );
}

export default ConfidenceMeter;