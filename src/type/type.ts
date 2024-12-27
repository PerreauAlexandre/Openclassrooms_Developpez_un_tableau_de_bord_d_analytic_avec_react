export type UserMainData = {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  todayScore?: number
  score?: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

type ActivitySession = {
  day: string
  kilogram: number
  calories: number
}

export type UserActivity = {
  userId: number
  sessions: ActivitySession[]
}

type AverageSession = {
  day: number
  sessionLength: number
}

export type UserAverageSessions = {
  userId: number
  sessions: AverageSession[]
}

type PerformanceData = {
  value: number
  kind: number
}

export type UserPerformance = {
  userId: number
  kind: Record<number, string>
  data: PerformanceData[]
}
