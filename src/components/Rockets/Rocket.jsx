const Rocket = ({description, title, image, id}) => {
  
    return (
      <div>
        <div>
          <img src={image} alt="" />
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button id={id}></button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Rocket;
  