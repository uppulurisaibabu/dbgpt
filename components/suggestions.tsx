export default function Suggestions() {
    const questions = [
      "What caused the significant decline in revenue for the Display channel on Firefox and Windows?",
      "How does the revenue performance compare across different channels for the last 3 months?",
      "What are the revenue trends for the top-performing channels in the last 3 months?",
      "Is there a correlation between pageviews and revenue for the Referral channel?"
    ]
  
    return (
      <div className="space-y-4">
        <h3 className="font-medium text-gray-600">Suggestions:</h3>
        <ul className="space-y-3">
          {questions.map((question, index) => (
            <li key={index} className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
              {question}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  