import React, { useState } from 'react';

const StudentFeedbackForm = () => {
  const [ratings, setRatings] = useState({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0
  });
  const [additionalComments, setAdditionalComments] = useState('');
  const [hoveredStar, setHoveredStar] = useState({ question: '', star: 0 });

  const questions = [
    {
      id: 'question1',
      text: 'How would you rate the overall job experience at this company?'
    },
    {
      id: 'question2',
      text: 'How supportive was your mentor/supervisor during the job?'
    },
    {
      id: 'question3',
      text: 'How well did the work assignments align with your learning objectives?'
    },
    {
      id: 'question4',
      text: 'How would you rate the company culture and work environment?'
    },
    {
      id: 'question5',
      text: 'How effectively did the company provide feedback on your performance?'
    },
    {
      id: 'question6',
      text: 'How likely are you to recommend this company to future interns?'
    },
    {
      id: 'question7',
      text: 'How well did the job contribute to your professional development?'
    },
    {
      id: 'question8',
      text: 'How satisfied were you with the resources and tools provided?'
    }
  ];

  const handleRatingChange = (questionId, rating) => {
    setRatings(prev => ({
      ...prev,
      [questionId]: rating
    }));
  };

  const handleMouseEnter = (questionId, star) => {
    setHoveredStar({ question: questionId, star });
  };

  const handleMouseLeave = () => {
    setHoveredStar({ question: '', star: 0 });
  };

  const getStarColor = (questionId, starIndex) => {
    const currentRating = ratings[questionId];
    const isHovered = hoveredStar.question === questionId && hoveredStar.star >= starIndex;
    const isRated = currentRating >= starIndex;
    
    if (isHovered || isRated) {
      return 'text-[#FF7A00]';
    }
    return 'text-gray-300';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all questions are answered
    const unansweredQuestions = Object.values(ratings).filter(rating => rating === 0);
    if (unansweredQuestions.length > 0) {
      alert('Please rate all questions before submitting.');
      return;
    }

    // Process the feedback data
    const feedbackData = {
      ratings,
      additionalComments,
      submittedAt: new Date().toISOString()
    };
    
    console.log('Student feedback submitted:', feedbackData);
    alert('Thank you for your feedback! Your insights will help improve future experiences.');
    
    // Reset form
    setRatings({
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      question5: 0,
      question6: 0,
      question7: 0,
      question8: 0
    });
    setAdditionalComments('');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFEF7' }}>
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg border border-black">
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black mb-2">Student Feedback</h2>
              <p className="text-black opacity-70">Please share your experience and help us improve our job program.</p>
            </div>

            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={question.id} className="p-6 rounded-lg border border-black" style={{ backgroundColor: '#FFFEF7' }}>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {index + 1}. {question.text}
                    </h3>
                    <p className="text-sm text-black opacity-60">Rate from 1 (Poor) to 5 (Excellent)</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`text-3xl transition-all duration-200 hover:scale-110 transform ${getStarColor(question.id, star)}`}
                        onClick={() => handleRatingChange(question.id, star)}
                        onMouseEnter={() => handleMouseEnter(question.id, star)}
                        onMouseLeave={handleMouseLeave}
                      >
                        ★
                      </button>
                    ))}
                    <span className="ml-4 text-sm text-black">
                      {ratings[question.id] > 0 ? (
                        <>
                          <span className="font-medium" style={{ color: '#FF9500' }}>Your rating: {ratings[question.id]}/5</span>
                          <span className="ml-2 text-black">
                            {ratings[question.id] === 1 && '(Poor)'}
                            {ratings[question.id] === 2 && '(Fair)'}
                            {ratings[question.id] === 3 && '(Good)'}
                            {ratings[question.id] === 4 && '(Very Good)'}
                            {ratings[question.id] === 5 && '(Excellent)'}
                          </span>
                        </>
                      ) : (
                        'No rating selected'
                      )}
                    </span>
                  </div>
                </div>
              ))}

              {/* Additional Comments Section */}
              <div className="p-6 rounded-lg border border-black" style={{ backgroundColor: '#FFFEF7' }}>
                <label htmlFor="additionalComments" className="block text-lg font-semibold text-black mb-3">
                  Additional Comments (Optional)
                </label>
                <p className="text-sm text-black opacity-70 mb-4">
                  Please share any specific feedback, suggestions for improvement, or memorable experiences from your job.
                </p>
                <textarea
                  id="additionalComments"
                  value={additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                  placeholder="Your comments here..."
                  rows={5}
                  className="w-full p-4 border border-black rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] resize-vertical bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 text-white font-semibold rounded-lg hover:opacity-90 focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 transition-all duration-200 shadow-md border border-black"
                  style={{ backgroundColor: '#FF7A00' }}
                >
                  Submit Feedback
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 p-4 rounded-lg border border-black" style={{ backgroundColor: '#FFFEF7' }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-black">Progress</span>
                <span className="text-sm text-black opacity-70">
                  {Object.values(ratings).filter(rating => rating > 0).length} of {questions.length} questions answered
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 border border-black">
                <div 
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: '#FF7A00',
                    width: `${(Object.values(ratings).filter(rating => rating > 0).length / questions.length) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedbackForm;