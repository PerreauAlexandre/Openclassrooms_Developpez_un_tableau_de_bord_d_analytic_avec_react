import { UserActivity } from '../../type/type'
import './ActivityGraph.scss'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from 'recharts'

type ActivityGraphProps = {
  userActivity: UserActivity | undefined
}

function ActivityGraph({ userActivity }: ActivityGraphProps) {
  const activityData = userActivity?.sessions.map((session) => ({
    ...session,
    day: parseInt(session.day.split('-')[2], 10),
  }))

  return (
    <div id="activity-graph">
      <div className="header">
        <div className="title">Activité quotidienne</div>
        <div className="legend">
          <span className="kilogram">Poids (kg)</span>
          <span className="calories">Calories brûlées (kCal)</span>
        </div>
      </div>
      <div className="bar-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData}>
            <CartesianGrid
              strokeDasharray="2"
              vertical={false}
              horizontalCoordinatesGenerator={(props) => {
                const { yAxis } = props
                return [yAxis.y, yAxis.y + yAxis.height / 2]
              }}
            />
            <XAxis
              dataKey="day"
              stroke="#DEDEDE"
              strokeWidth={1}
              tickLine={false}
              tick={{ fontSize: 14, fill: '#9B9EAC', dy: 10 }}
            />
            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: '#9B9EAC', dx: 20 }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#E60000' }}
              labelStyle={{ display: 'none' }}
              itemStyle={{ color: '#FFFFFF', fontSize: '10px' }}
              formatter={(value, name) =>
                name === 'kilogram' ? [`${value} kg`] : [`${value} kCal`]
              }
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ActivityGraph
