import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  updateMatchDetails = () => {
    const {latestMatchDetails} = this.props
    const updatedData = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      date: latestMatchDetails.date,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    return updatedData
  }

  render() {
    const {latestMatchDetails} = this.props
    const updatedDetails = this.updateMatchDetails()
    const {
      competingTeam,
      date,
      result,
      competingTeamLogo,
      venue,
      firstInnings,
      secondInnings,
      umpires,
      matchStatus,
      manOfTheMatch,
    } = updatedDetails
    return (
      <div className="latest-match-details-container">
        <h1 className="latest-matches-heading"> Latest Matches</h1>
        <div className="latest-match-details-card">
          <div className="latest-match-competing-team-details-logo-card">
            <div className="latest-match-against-team-card">
              <p className="competing-team-heading"> {competingTeam} </p>
              <p className="match-date"> {date} </p>

              <p className="match-venue"> {venue}</p>
              <p className="match-result"> {result} </p>
            </div>
            <img
              src={competingTeamLogo}
              className="competing-team-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <hr className="horizontal-line" />
          <div className="latest-match-results-container">
            <p className="match-results-label"> First Innings</p>
            <p className="match-results-text"> {firstInnings} </p>
            <p className="match-results-label"> Second Innings </p>
            <p className="match-results-text"> {secondInnings}</p>
            <p className="match-results-label"> Man Of The Match</p>
            <p className="match-results-text"> {manOfTheMatch} </p>
            <p className="match-results-label"> umpires </p>
            <p className="match-results-text"> {umpires} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
