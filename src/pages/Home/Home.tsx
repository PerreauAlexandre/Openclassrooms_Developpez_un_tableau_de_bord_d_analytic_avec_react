import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
  return (
    <div id="home">
      <Link to="/tableau-de-bord/12" className="link">
        User 12
      </Link>
      <Link to="/tableau-de-bord/18" className="link">
        User 18
      </Link>
    </div>
  )
}

export default Home
