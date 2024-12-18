'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function RevenueGraph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  const labels = ['Apr 29', 'May 5', 'May 19', 'May 29', 'Jun 8', 'Jun 19', 'Jun 29', 'Jul 9', 'Jul 29']

  const data = {
    labels,
    datasets: [
      {
        label: 'Trend',
        data: [50, 200, 80, 90, 70, 95, 85, 100, 200],
        borderColor: '#B666F2',
        backgroundColor: '#B666F2',
        tension: 0.4,
      },
      {
        label: 'Trend line',
        data: [75, 85, 85, 85, 90, 90, 95, 95, 100],
        borderColor: '#E2E8F0',
        backgroundColor: '#E2E8F0',
        borderDash: [5, 5],
        tension: 0.4,
      },
    ],
  }

  return (
    <div className="w-full h-[200px]">
      <Line options={options} data={data} />
    </div>
  )
}

