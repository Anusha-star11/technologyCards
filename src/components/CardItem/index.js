// Write your code here.
import './index.css'

const CardItem = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li className={`${className} card-item`}>
      <h1 className="Card-heading">{title}</h1>
      <p className="Card-paragraph">{description}</p>
      <div className="img-container">
        <img className="Card-image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
