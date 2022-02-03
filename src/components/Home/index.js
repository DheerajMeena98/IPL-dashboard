import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {
    iplTeamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const updatedList = jsonData.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({
      iplTeamsList: updatedList,
      isLoading: false,
    })
  }

  render() {
    const {iplTeamsList, isLoading} = this.state

    return (
      <div className="ipl-dashboard-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="ipl-teams-bcg-container">
            <div className="ipl-logo-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-dashboard-heading"> IPL Dashboard</h1>
            </div>
            <ul className="ipl-teams-container">
              {iplTeamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
