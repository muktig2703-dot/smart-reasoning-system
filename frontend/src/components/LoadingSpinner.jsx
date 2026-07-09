function LoadingSpinner() {
    return (
        <div className="loading-card">
            <div className="spinner"></div>

            <h2>Analyzing your problem...</h2>

            <ul className="loading-steps">
                <li>🧠 Planning reasoning steps...</li>
                <li>🔍 Evaluating the problem...</li>
                <li>⚠ Critiquing the solution...</li>
                <li>✅ Preparing the recommendation...</li>
            </ul>
        </div>
    );
}

export default LoadingSpinner;