import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Game from './Components/Game'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    displayScore: 0,
    isClicked: false,
    clickedImage: '',
    opponentImg: '',
    opponentId: '',
    gameStatus: '',
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  renderClickingId = (id, imageUrl) => {
    const randomNum = Math.floor(Math.random() * 3)

    this.setState({
      isClicked: true,
      clickedImage: imageUrl,
      opponentImg: choicesList[randomNum].imageUrl,
      opponentId: choicesList[randomNum].id,
    })

    const {opponentId} = this.state
    if (opponentId === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        displayScore: prevState.displayScore + 1,
        gameStatus: 'YOU WON',
        opponentId: choicesList[randomNum].id,
      }))
    } else if (opponentId === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        gameStatus: 'YOU LOSE',
        displayScore: prevState.displayScore - 1,
        opponentId: choicesList[randomNum].id,
      }))
    } else if (opponentId === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        gameStatus: 'YOU LOSE',
        displayScore: prevState.displayScore - 1,
        opponentId: choicesList[randomNum].id,
      }))
    } else if (opponentId === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        gameStatus: 'YOU WON',
        displayScore: prevState.displayScore + 1,
        opponentId: choicesList[randomNum].id,
      }))
    } else if (opponentId === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        gameStatus: 'YOU LOSE',
        displayScore: prevState.displayScore - 1,
        opponentId: choicesList[randomNum].id,
      }))
    } else if (opponentId === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        gameStatus: 'YOU WON',
        displayScore: prevState.displayScore + 1,
        opponentId: choicesList[randomNum].id,
      }))
    } else {
      this.setState({
        gameStatus: 'IT IS DRAW',
        opponentId: choicesList[randomNum].id,
      })
    }
  }

  render() {
    const {displayScore, clickedImage, opponentImg, isClicked, gameStatus} =
      this.state

    return (
      <div>
        <div>
          <div>
            <h1>Rock Paper Scissors</h1>
          </div>
          <div>
            <p>Score</p>
            <p>{displayScore}</p>
          </div>
        </div>
        {isClicked ? (
          <div>
            <img src={clickedImage} alt="your choice" />
            <img src={opponentImg} alt="opponent choice" />
            <p>{gameStatus}</p>
            <button type="button" onClick={this.onClickPlayAgain}>
              PLAY AGAIN
            </button>
          </div>
        ) : (
          choicesList.map(eachItem => (
            <Game
              eachItem={eachItem}
              renderClickingId={this.renderClickingId}
              key={eachItem.id}
            />
          ))
        )}

        <div>
          <Popup modal trigger={<button type="button">Rules</button>}>
            {close => (
              <>
                <button
                  type="button"
                  className="cross-bt"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
