const DragonItem = ({name, type, description, img}) => {
  return (
    <li>
      <div className="dragon-img">
        <img src={img} alt={name} />
      </div>
      <div className="dragon-details">
        <h2>{name}</h2>
        <p>{type}</p>
        <p>{description}</p>
        <button type="button">Reserve Dragon</button>
      </div>
    </li>
  )
}

export default DragonItem;