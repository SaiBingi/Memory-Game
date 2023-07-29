import './index.css'

const CardItem = props => {
  const {flowerDetails, defaultImgUrl} = props
  const {flowerName, flowerUrl, isOpen} = flowerDetails

  const imagePath = isOpen ? flowerUrl : defaultImgUrl

  const onClickFlower = () => {
    const {id} = flowerDetails
    const {clickCard} = props
    clickCard(id)
  }

  return (
    <li>
      <button
        type="button"
        className="flower-container"
        onClick={onClickFlower}
      >
        <img src={imagePath} alt={flowerName} className="flower" />
      </button>
    </li>
  )
}

export default CardItem
