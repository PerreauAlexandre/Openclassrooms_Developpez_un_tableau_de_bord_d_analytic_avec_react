import { UserPerformance } from '../../type/type'
import './PerformanceGraph.scss'
import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'

type PerformanceGraphProps = {
  UserPerformance: UserPerformance | undefined
}

const performanceType = [
  'Cardio',
  'Energie',
  'Endurance',
  'Force',
  'Vitesse',
  'Intensité',
]

function PerformanceGraph({ UserPerformance }: PerformanceGraphProps) {
  const performanceData = UserPerformance?.data.map((performance) => ({
    ...performance,
    kind: performanceType[performance.kind - 1],
  }))

  const [outerRadius, setOuterRadius] = useState(70)

  const updateOuterRadius = () => {
    const screenWidth = window.innerWidth
    setOuterRadius(screenWidth < 1300 ? screenWidth < 1200 ? 50 : 60 : 70)
  }

  useEffect(() => {
    updateOuterRadius()
    window.addEventListener('resize', updateOuterRadius)
    return () => window.removeEventListener('resize', updateOuterRadius)
  }, [])

  return (
    <div id="performance-graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={performanceData}
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          startAngle={-150}
          endAngle={210}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickSize={10}
            tick={{ dy: 3, fontSize: 12, fill: '#FFFFFF' }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            opacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceGraph
