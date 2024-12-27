import { UserAverageSessions } from '../../type/type'
import './SessionsGraph.scss'
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts'

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
      <div className="title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          onMouseMove={(e: any) => {
            if (e.isTooltipActive === true) {
              const div: any = document.getElementById('sessions-graph')
              const windowWidth = div.clientWidth
              const percentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              )
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${percentage}%, rgba(230,0,0,1.5) ${percentage}%, rgba(230,0,0,1.5) 100%)`
            }
          }}
          margin={{
            top: 75,
            right: 15,
            left: 15,
            bottom: 40,
          }}
          data={sessionsData}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>
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
            cursor={false}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
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
