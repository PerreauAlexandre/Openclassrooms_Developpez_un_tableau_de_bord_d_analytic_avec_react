import './ScoreGraph.scss'
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from 'recharts'

type ScoreGraphProps = {
  userScore: number | undefined
}

function ScoreGraph({ userScore }: ScoreGraphProps) {
  const percentScore = userScore ? userScore * 100 : 0

  const scoreData = [
    {
      name: 'score',
      score: percentScore,
    },
  ]

  return (
    <div id="score-graph">
      <div className="title">Score</div>
      <div className="legend">
        <div className="legend-value">{`${percentScore}%`}</div>
        <div className="legend-text">de votre objectif</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={scoreData}
          cx="50%"
          cy="50%"
          innerRadius="65%"
          barSize={12}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="score" fill="#FF0000" cornerRadius={6} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScoreGraph
