import { useParams, Navigate } from 'react-router-dom'
import useUserData from '../../utils/useUserData'
import './TableauDeBord.scss'
import ActivityGraph from '../../components/ActivityGraph/ActivityGraph'
import SessionsGraph from '../../components/SessionsGraph/SessionsGraph'
import PerformanceGraph from '../../components/PerformanceGraph/PerformanceGraph'
import ScoreGraph from '../../components/ScoreGraph/ScoreGraph'
import KeyDataCard from '../../components/KeyData/KeyData'
import logo from '../../assets/logo.svg'
import yogaIcon from '../../assets/yogaIcon.svg'
import swimmingIcon from '../../assets/swimmingIcon.svg'
import bikeIcon from '../../assets/bikeIcon.svg'
import bodybuildingIcon from '../../assets/bodybuildingIcon.svg'
import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

function TableauDeBord() {
  const { userId } = useParams<string>()

  const {
    userData,
    userActivity,
    userSessions,
    userPerformance,
    isLoading,
    error,
  } = useUserData(userId)

  if (error) {
    return <Navigate to="/error" replace={true} />
  }

  return isLoading ? (
    <div>Chargement des données...</div>
  ) : (
    <div id="tableau-de-bord">
      <header>
        <img src={logo} alt="Logo SportSee" />
        <div>Acceuil</div>
        <div>Profil</div>
        <div>Réglage</div>
        <div>Communauté</div>
      </header>
      <main>
        <div className="left-menu">
          <div></div>
          <div className="icons">
            <div className="icon">
              <img src={yogaIcon} alt="Yoga icon" />
            </div>
            <div className="icon">
              <img src={swimmingIcon} alt="Swimming icon" />
            </div>
            <div className="icon">
              <img src={bikeIcon} alt="Bike icon" />
            </div>
            <div className="icon">
              <img src={bodybuildingIcon} alt="Bodybuilding icon" />
            </div>
          </div>
          <div className="copyright">Copiryght, SportSee 2020</div>
        </div>
        <div className="main-content">
          <div className="top-infos">
            <div className="user-name">
              Bonjour <span>{userData?.userInfos.firstName}</span>
            </div>
            <div className="description">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </div>
          </div>
          <div className="statistics">
            <div className="graphs">
              <ActivityGraph userActivity={userActivity} />
              <div className="horizontal-graphs">
                <SessionsGraph userSessions={userSessions} />
                <PerformanceGraph UserPerformance={userPerformance} />
                <ScoreGraph userScore={userData?.todayScore ? userData.todayScore :  userData?.score} />
              </div>
            </div>
            <div className="key-data">
              <KeyDataCard
                icon={energy}
                color="red"
                value={userData?.keyData.calorieCount || 0}
                unit="kCal"
                description="Calories"
              />
              <KeyDataCard
                icon={chicken}
                color="blue"
                value={userData?.keyData.proteinCount || 0}
                unit="g"
                description="Proteines"
              />
              <KeyDataCard
                icon={apple}
                color="yellow"
                value={userData?.keyData.carbohydrateCount || 0}
                unit="g"
                description="Glucides"
              />
              <KeyDataCard
                icon={cheeseburger}
                color="pink"
                value={userData?.keyData.lipidCount || 0}
                unit="g"
                description="Lipides"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TableauDeBord
