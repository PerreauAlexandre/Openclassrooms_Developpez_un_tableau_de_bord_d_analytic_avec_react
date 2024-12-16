import { useState, useEffect } from 'react'
import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from '../type/type'
import {
  userDataMock,
  userActivityMock,
  userSessionsMock,
  userPerformanceMock,
} from '../mock-data/mock-data.js'
import { config } from '../config'

const API_BASE_URL = 'http://localhost:3000'

function useUserData(userId: string | undefined) {
  const [userData, setUserData] = useState<UserMainData>()
  const [userActivity, setUserActivity] = useState<UserActivity>()
  const [userSessions, setUserSessions] = useState<UserAverageSessions>()
  const [userPerformance, setUserPerformance] = useState<UserPerformance>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)

        if (config.production) {
          const userResponse = await fetch(`${API_BASE_URL}/user/${userId}`)
          const user = await userResponse.json()
          setUserData(user.data)

          const activityResponse = await fetch(
            `${API_BASE_URL}/user/${userId}/activity`
          )
          const activity = await activityResponse.json()
          setUserActivity(activity.data)

          const sessionsResponse = await fetch(
            `${API_BASE_URL}/user/${userId}/average-sessions`
          )
          const sessions = await sessionsResponse.json()
          setUserSessions(sessions.data)

          const performanceResponse = await fetch(
            `${API_BASE_URL}/user/${userId}/performance`
          )
          const performance = await performanceResponse.json()
          setUserPerformance(performance.data)
        } else {
          if (userId) {
            const userMock = userDataMock.find(
              (user: UserMainData) => user.id === parseInt(userId)
            )
            setUserData(userMock)
            const activityMock = userActivityMock.find(
              (activity: UserActivity) => activity.userId === parseInt(userId)
            )
            setUserData(activityMock)
            const sessionMock = userSessionsMock.find(
              (session: UserAverageSessions) =>
                session.userId === parseInt(userId)
            )
            setUserData(sessionMock)
            const performanceMock = userPerformanceMock.find(
              (performance: UserPerformance) =>
                performance.userId === parseInt(userId)
            )
            setUserData(performanceMock)
          }
        }
      } catch (err) {
        console.error(err)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [userId])

  return {
    userData,
    userActivity,
    userSessions,
    userPerformance,
    isLoading,
    error,
  }
}

export default useUserData
