import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="each-team-link">
      <li className="each-team-card">
        <img src={teamImageUrl} alt={name} className="each-team-image" />
        <p className="each-team-name"> {name} </p>
      </li>
    </Link>
  )
}

export default TeamCard
