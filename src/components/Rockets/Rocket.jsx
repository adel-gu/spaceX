import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { rocketBooking, rocketCancelation } from '../../Redux/rockets/rockets';

const Rocket = ({
  name, type, description, img, id, reserved,
}) => {
  const dispatch = useDispatch();

  const booking = () => {
    dispatch(rocketBooking(id));
  };

  const canceling = () => {
    dispatch(rocketCancelation(id));
  };

  return (
    <div>
      <Card className="flex-md-row border-0 mb-5">
        <Card.Img style={{ maxWidth: '18rem', height: '18rem' }} variant="left" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <Card.Text>
            {reserved ? <Badge bg="info" className="me-2">Reserved</Badge> : ''}
            {description}
          </Card.Text>
          <Button id={id} onClick={reserved ? canceling : booking} variant={reserved ? 'outline-secondary' : 'primary'}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
