const DragonItem = ({name, type, img}) => {
  return (
    <li>
      <div className="dragon-img">
        <img src={img} alt={name} />
      </div>
      <div className="dragon-details">
        <h2>{name}</h2>
        <p>{type}</p>
        <button type="button">Reserve Dragon</button>
      </div>
    </li>
  )
}

export default DragonItem;