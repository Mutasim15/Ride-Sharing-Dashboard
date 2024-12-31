import React, { useState } from 'react';
import './Reviews.css'; // Import CSS for styling

const Reviews = () => {
  // Sample Data (Replace with API calls as needed)
  const [reviews, setReviews] = useState([
    { id: 1, rating: 5, text: 'Great experience!', customer: 'John' },
    { id: 2, rating: 4, text: 'Good service.', customer: 'Jane' },
    { id: 3, rating: 3, text: 'Average ride.', customer: 'Anonymous' },
  ]);

  const [respondedReviews, setRespondedReviews] = useState({});

  const badges = [
    { id: 1, name: '100 Rides with 5-Star Reviews', earned: true },
    { id: 2, name: 'Top Performer of the Week', earned: false },
  ];

  const handleResponse = (id, response) => {
    setRespondedReviews({ ...respondedReviews, [id]: response });
  };

  return (
    <div className="reviews-container">
      {/* Review Summary */}
      <div className="review-summary">
        <h2>Review Summary</h2>
        <p>Average Rating: {(
          reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
        ).toFixed(1)} ★</p>
        <p>Total Reviews: {reviews.length}</p>
      </div>

      {/* Detailed Reviews */}
      <div className="detailed-reviews">
        <h3>Detailed Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <p><strong>Rating:</strong> {review.rating} ★</p>
            <p><strong>Feedback:</strong> {review.text}</p>
            <p><strong>Customer:</strong> {review.customer}</p>

            {/* Respond to Reviews */}
            {!respondedReviews[review.id] && (
              <div className="respond-section">
                <textarea
                  placeholder="Write a response..."
                  onChange={(e) => handleResponse(review.id, e.target.value)}
                />
                <button onClick={() => alert('Response submitted!')}>Submit</button>
              </div>
            )}
            {respondedReviews[review.id] && (
              <p><strong>Your Response:</strong> {respondedReviews[review.id]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Anonymous Feedback */}
      <div className="anonymous-feedback">
        <h3>Anonymous Feedback</h3>
        {reviews
          .filter((review) => review.customer === 'Anonymous')
          .map((review) => (
            <div key={review.id} className="review-item">
              <p><strong>Feedback:</strong> {review.text}</p>
            </div>
          ))}
      </div>

      {/* Badges or Achievements */}
      <div className="badges-achievements">
        <h3>Badges & Achievements</h3>
        <ul>
          {badges.map((badge) => (
            <li key={badge.id} className={badge.earned ? 'earned' : 'not-earned'}>
              {badge.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
