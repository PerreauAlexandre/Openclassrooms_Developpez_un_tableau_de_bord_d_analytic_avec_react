import { useParams } from 'react-router-dom'
import './TableauDeBord.scss'

function TableauDeBord() {
    const { userId } = useParams<string>()

  return (
    <div id="tableau-de-bord">
        {`Utilisateur ${userId}`}
    </div>
  )
}

export default TableauDeBord