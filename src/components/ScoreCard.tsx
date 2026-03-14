interface ScoreCardProps {
  title: string
  score: number
  color: string
  icon: string
}

export default function ScoreCard({ title, score, color, icon }: ScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900/20'
    if (score >= 50) return 'bg-yellow-100 dark:bg-yellow-900/20'
    return 'bg-red-100 dark:bg-red-900/20'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className={`text-5xl font-bold ${getScoreColor(score)} mb-2`}>
        {score.toFixed(0)}
      </div>
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getScoreBg(score)} ${getScoreColor(score)}`}>
        {score >= 90 ? 'Excellent' : score >= 50 ? 'Needs Improvement' : 'Poor'}
      </div>
    </div>
  )
}