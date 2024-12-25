import { UserPerformance } from '../../type/type'
import './PerformanceGraph.scss'
// import {
//   ResponsiveContainer
// } from 'recharts'

type PerformanceGraphProps = {
  UserPerformance: UserPerformance | undefined
}

function PerformanceGraph({ UserPerformance }: PerformanceGraphProps) {
  console.log(UserPerformance)

  return <div></div>
}

export default PerformanceGraph
