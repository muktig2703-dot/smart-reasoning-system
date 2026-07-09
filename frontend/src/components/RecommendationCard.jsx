function RecommendationCard({ recommendation }) {
    if (!recommendation) return null;

    return (
        <div className="recommendation-section">

            <h2>✅ Final Recommendation</h2>

            <div className="recommendation-card">

                <h3>Summary</h3>
                <p>{recommendation.summary}</p>

                <h3>Recommendation</h3>
                <p>{recommendation.recommendation}</p>

            </div>

        </div>
    );
}

export default RecommendationCard;