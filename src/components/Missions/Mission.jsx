import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { joinMission, leavingMission } from "../../redux/Missions/Missions";

function Mission({ id, name, description, reserved }) {
  const dispatch = useDispatch();

  const join = () => {
    dispatch(joinMission(id));
  };

  const leave = () => {
    dispatch(leavingMission(id));
  };

  return (
    <>
      <tr key={id}>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          <Badge bg="secondary">NOT A MEMBER</Badge>
        </td>
        <td className="border">
          <Button
            id={id}
            onClick={reserved ? leave : join}
            variant={reserved ? "outline-danger" : "outline-secondary"}
          >
            {reserved ? "Leave Misson" : "Join Mission"}
          </Button>
        </td>
      </tr>
    </>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string
};

export default Mission;
