import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  updateRecentMatchesList = () => {
    const {eachMatchCard} = this.props
    const updatedList = {
      competingTeam: eachMatchCard.competing_team,
      competingTeamLogo: eachMatchCard.competing_team_logo,
      matchStatus: eachMatchCard.match_status,
      result: eachMatchCard.result,
    }

    return updatedList
  }

  render() {
    const updatedData = this.updateRecentMatchesList()
    const {competingTeam, competingTeamLogo, matchStatus, result} = updatedData
    return (
      <li className="each-recent-match-card">
        <img
          src={competingTeamLogo}
          className="each-competing-team-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="competing-team-text"> {competingTeam}</p>
        <p className="each-match-status-text"> {matchStatus} </p>
        <p className="each-match-result-text"> {result}</p>
      </li>
    )
  }
}

export default MatchCard
