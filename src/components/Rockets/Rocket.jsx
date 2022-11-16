import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Rocket = ({
  name, description, image, id,
}) => (
  <div>
    <Card className="flex-md-row border-0 mb-5">
      <Card.Img style={{ maxWidth: '18rem', height: '18rem' }} variant="left" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button id={id} variant="primary">Reserve Dragon</Button>
      </Card.Body>
    </Card>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
