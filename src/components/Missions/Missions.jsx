import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { fetchMissions } from '../../redux/Missions/Missions';
import './Missions.css';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const missions = useSelector((state) => state.missions);
  return (
    <main>
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Missions;
