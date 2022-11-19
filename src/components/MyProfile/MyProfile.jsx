import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import Stack from 'react-bootstrap/Stack';

function MyProfile() {
  // Rockets State
  const rockets = useSelector((state) => state.rockets);
  // Missions State
  const missions = useSelector((state) => state.missions);
  // Dragons State
  const dragons = useSelector((state) => state.dragons);
  // Reseved dragons
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  // Joined Missions
  const joinedMission = missions.filter((mission) => mission.reserved === true);
  return (
    <Stack className="container" style={{ border: 'none' }} direction="horizontal" gap={3}>
      {/* Display Rockets */}
      <div className="row">
        <div className="col-6">
          <h1>My Rockets</h1>
          <ListGroup style={{ width: '30rem' }}>
            {
              rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
                <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
              ))
          }
          </ListGroup>
        </div>

        {/* Display Dragons */}
        <div className="col-6">
          <h1>My Dragons</h1>
          <ListGroup style={{ width: '30rem' }}>
            {
            reservedDragons.map((dragon) => (
              <ListGroup.Item key={dragon.id}>{dragon.name}</ListGroup.Item>
            ))
          }
          </ListGroup>
        </div>

        {/* Display Missions */}
        <div className="col-6">
          <h1>My Missions</h1>
          <ListGroup style={{ width: '30rem' }}>
            {
              joinedMission.map((mission) => (
                <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
              ))
            }
          </ListGroup>
        </div>
      </div>
    </Stack>
  );
}

export default MyProfile;
