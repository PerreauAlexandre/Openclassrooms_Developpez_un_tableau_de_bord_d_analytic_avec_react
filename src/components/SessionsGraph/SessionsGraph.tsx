import { UserAverageSessions } from '../../type/type'
import './SessionsGraph.scss'
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'

type SessionsGraphProps = {
  userSessions: UserAverageSessions | undefined
}

const jours = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

function SessionsGraph({ userSessions }: SessionsGraphProps) {
  const sessionsData = userSessions?.sessions.map((session) => ({
    ...session,
    day: jours[session.day - 1],
  }))

  return (
    <div id="sessions-graph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sessionsData}
          margin={{
            top: 75,
            right: 15,
            left: 15,
            bottom: 30,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: '#FFFFFF', dy: 30, opacity: 0.5 }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#FFFFFF' }}
            labelStyle={{ display: 'none' }}
            itemStyle={{ color: '#000000', fontSize: '10px' }}
            formatter={(value) => [`${value} min`]}
          />
          {/* <Legend /> */}
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: '#FFFFFF',
              stroke: '#FFFFFF',
              strokeWidth: 5,
              r: 4,
              strokeOpacity: 0.3,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SessionsGraph
