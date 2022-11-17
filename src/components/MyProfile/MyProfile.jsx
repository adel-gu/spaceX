import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);

  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  return (
    <Stack direction="horizontal" gap={3}>
      {/* Display Rockets */}
      <div>
        <h1>My Rockets</h1>
        <ListGroup style={{ width: '30rem' }}>
          {
            rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
              <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
            ))
        }
        </ListGroup>
      </div>

      <div>
        <h1>My Dragons</h1>
        <ListGroup style={{ width: '30rem' }}>
          {
          reservedDragons.map((dragon) => (
            <ListGroup.Item key={dragon.id}>{dragon.name}</ListGroup.Item>
          ))
        }
        </ListGroup>
      </div>
    </Stack>
  );
}

export default MyProfile;
