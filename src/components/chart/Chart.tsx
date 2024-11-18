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
  Filler,
} from 'chart.js'

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const MIN = 103
const MAX = 106

export default function Chart() {
  const labels = [
    '1D',
    '1W',
    '1M',
    '3M',
    '6M',
    'YTD',
    '1Y',
    '2Y',
    '5Y',
    '10Y',
    '15Y',
    'ALL',
  ]
  const getData = () => {
    const randomNumbers = Array.from(
      { length: labels.length },
      () => Math.floor(Math.random() * (MAX - MIN - 0.9)) + MIN + 1
    )
    return randomNumbers
  }
  const data = {
    labels,
    datasets: [
      {
        label: 'My Dataset',
        data: getData(),
        borderColor: 'rgba(0, 138, 61, 1)',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        backgroundColor: function (context: any) {
          const chart = context.chart
          const { ctx, chartArea } = chart

          if (!chartArea) {
            return null
          }

          // Create gradient
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          )
          gradient.addColorStop(0, '#008A3D') // Start color
          gradient.addColorStop(0.1, '#66B686') // Middle color at 48.25%
          gradient.addColorStop(1, '#FFFFFF') // End color at 103.37%

          return gradient
        },

        pointRadius: 0,
        fill: 'start',
      },
    ],
  }

  return (
    <div>
      <Line
        style={{}}
        data={data}
        options={{
          maintainAspectRatio: false, // Disable aspect ratio
          responsive: true, // Enable responsiveness
          scales: {
            y: {
              min: MIN,
              max: MAX,
              position: 'right',
            },
            x: {
              position: 'top',
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
          },
        }}
      />
    </div>
  )
}
