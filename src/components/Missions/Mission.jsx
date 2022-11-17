import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function Mission({
  id, name, description,
}) {
  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td><Badge bg="secondary">NOT A MEMBER</Badge></td>
        <td><Button id={id} variant="outline-secondary">Join Mission</Button></td>
      </tr>
    </>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
