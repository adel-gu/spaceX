import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
function MyProfile() {
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter(dragon => dragon.reserved === true);
  return (
    <>
      {/* Display Dragons */}
      <h1>My Dragons</h1>
      <ListGroup style={{width: '30rem'}}>
        {
          reservedDragons.map(dragon => (
            <ListGroup.Item key={dragon.id}>{dragon.name}</ListGroup.Item>
          ))
        }
      </ListGroup>
    </>
  )
}

export default MyProfile;
