import React, { Component } from 'react'
// import RiotRequest from 'riot-lol-api'
import axios from 'axios'
import Match from './Component/Match'

const gamerApi = 'https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/U96mkjDvs3vtbsW1fXV7a6ekhsjuHfODrg3KDVF-uW1-AA?api_key=RGAPI-8e1aba3f-601c-4252-85e6-c70a43711aa2'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allMatches: []
    }
  }

  componentDidMount() {
    axios.get(gamerApi)
      .then(res => {
        this.setState({
          allMatches: res.data.matches
        })
      })
  }
  render() {
    return (
      <div>
        <h2>Gamer's record in previous battles</h2>
        {this.state.allMatches.map(infor => <Match summonerinfor={infor} />)}
        <Match />
      </div>
    )
  }
}

export default App