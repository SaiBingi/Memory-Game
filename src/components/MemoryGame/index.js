/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'

import {Component} from 'react'

// import NavBar from '../NavBar'

import CardItem from '../CardItem'

// import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
 
*/

let timerId = null

class MemoryGame extends Component {
  state = {recentClickedCards: [], visited: [], flowersList: []}

  componentDidMount() {
    this.shuffledCardsList()
  }

  componentWillUnmount() {
    clearTimeout(timerId)
  }

  shuffledCardsList = () => {
    const {flowersList} = this.props
    flowersList.sort(() => Math.random() - 0.5)
    this.setState({flowersList})
  }

  clickCard = id => {
    clearTimeout(timerId)
    const {recentClickedCards, flowersList, visited} = this.state

    const clickedCardIndex = visited.findIndex(eachCard => eachCard.id === id)

    const clickedCard = flowersList.find(eachCard => eachCard.id === id)

    if (clickedCard.isOpen) {
      return // If already open, return early to prevent further actions
    }

    const updatedFlowersList = flowersList.map(eachFlower => {
      // Check if eachFlower is the clickedCard object
      if (eachFlower === clickedCard) {
        // If it is, return a new object with isOpen set to true
        return {...eachFlower, isOpen: true}
      }
      // If it's not, return the original object
      return eachFlower
    })

    if (clickedCardIndex === -1) {
      this.setState(prevState => ({
        visited: [...prevState.visited, id],
        recentClickedCards: [...prevState.recentClickedCards, clickedCard],
        flowersList: [...updatedFlowersList],
      }))
    }

    if (recentClickedCards.length === 1) {
      if (recentClickedCards[0].flowerUrl === clickedCard.flowerUrl) {
        if (clickedCardIndex === -1) {
          this.setState({
            recentClickedCards: [],
          })
        }
      } else {
        timerId = setTimeout(() => {
          //   console.log(recentClickedCards[0])
          const clearRecentList = [...flowersList]

          recentClickedCards.forEach(eachCard => {
            const index = clearRecentList.findIndex(
              flower => flower.id === eachCard.id,
            )
            if (index !== -1) {
              clearRecentList[index].isOpen = false
            }
          })
          this.setState({
            recentClickedCards: [],
            flowersList: [...clearRecentList],
            visited: [
              ...visited.filter(
                eachCard => eachCard.id !== recentClickedCards[0].id,
              ),
            ],
          })
        }, 500)
      }
      console.log(recentClickedCards)
    }
  }

  render() {
    const {flowersList} = this.state

    const defaultImgUrl =
      'https://res.cloudinary.com/dysnxt2oz/image/upload/v1690616536/woman-white-shirt-holds-piece-paper-with-text_384017-979_kxkwpj.jpg'

    // console.log(flowersList)

    return (
      <div className="container">
        <div className="bg-container">
          <ul className="flowers-container">
            {flowersList.map(eachFlower => (
              <CardItem
                key={eachFlower.id}
                flowerDetails={eachFlower}
                defaultImgUrl={defaultImgUrl}
                clickCard={this.clickCard}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MemoryGame
