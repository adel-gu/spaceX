import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { rocketBooking } from '../../redux/rockets/rockets';

const Rocket = ({
  name, type, description, img, id,
}) => {
  const dispatch = useDispatch();

  const [booked, setBooked] = useState(false);

  const reserveBooking = () => {
    dispatch(rocketBooking(id));
    setBooked(!booked);
  };

  const reserved = <Button variant="info">Reserved</Button>;
  return (
    <div>
      <Card className="flex-md-row border-0 mb-5">
        <Card.Img style={{ maxWidth: '18rem', height: '18rem' }} variant="left" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <Card.Text>
            {booked ? reserved : ''}
            {description}
          </Card.Text>
          <Button id={id} onClick={reserveBooking} variant={booked ? 'outline-secondary' : 'primary'}>{booked ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
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
};

export default Rocket;
