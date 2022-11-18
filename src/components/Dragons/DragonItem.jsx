// Hooks
import { useDispatch } from 'react-redux';
// props
import PropTypes from 'prop-types';

// React-bootstrap components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

// Redux Actions
import { reserveDragon,  cancelReserveDragon} from '../../Redux/dragons/dragons';


const DragonItem = ({id, name, type, description, reserved, img}) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Card className="flex-md-row border-0 mb-5">
        <Card.Img style={{ maxWidth: '18rem', height: "18rem" }} variant="left" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{type}</Card.Text>
          <Card.Text>
            {(reserved) ? <Badge bg="info" className="me-2">Reserved</Badge> : ""}
            {description}
          </Card.Text>
          {
          (reserved) ? 
            <Button variant="btn btn-outline-secondary" onClick={() => dispatch(cancelReserveDragon(id))}>Cancel Reservation</Button>
            : 
            <Button variant="primary" onClick={() => dispatch(reserveDragon(id))}>Reserve Dragon</Button>
          }
        </Card.Body>
      </Card>
    </li>
  );
}

DragonItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DragonItem;
