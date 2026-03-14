interface MetricCardProps {
  label: string
  value: number
  unit: string
  description: string
  icon: string
}

export default function MetricCard({ label, value, unit, description, icon }: MetricCardProps) {
  const getMetricColor = (label: string, value: number) => {
    if (label === 'LCP') {
      if (value <= 2.5) return 'text-green-600'
      if (value <= 4) return 'text-yellow-600'
      return 'text-red-600'
    }
    if (label === 'FID') {
      if (value <= 100) return 'text-green-600'
      if (value <= 300) return 'text-yellow-600'
      return 'text-red-600'
    }
    if (label === 'CLS') {
      if (value <= 0.1) return 'text-green-600'
      if (value <= 0.25) return 'text-yellow-600'
      return 'text-red-600'
    }
    if (label === 'TBT') {
      if (value <= 200) return 'text-green-600'
      if (value <= 600) return 'text-yellow-600'
      return 'text-red-600'
    }
    return 'text-gray-900 dark:text-white'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          {label}
        </h4>
      </div>
      <p className={`text-3xl font-bold ${getMetricColor(label, value)} mb-1`}>
        {label === 'CLS' ? value.toFixed(3) : value.toFixed(0)}{unit}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}