import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { fetchMissions } from '../../Redux/Missions/Missions';
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
            <th className="border">Mission</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
            <th className="border">{' '}</th>
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
