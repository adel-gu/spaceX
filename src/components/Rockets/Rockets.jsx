import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import { fetchRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const rockets = useSelector((state) => state.rockets);

  return (
    <main>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Rocket
              image={rocket.image}
              id={rocket.id}
              description={rocket.description}
              name={rocket.name}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Rockets;
