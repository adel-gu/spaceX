import PropTypes from 'prop-types';

const Rocket = ({
  name, description, image, id,
}) => (
  <div>
    <div>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" id={id}>Reserve Rocket</button>
      </div>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
