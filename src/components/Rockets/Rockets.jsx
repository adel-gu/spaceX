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
    <main className="container" style={{ border: 'none' }}>
      <ul className="dragons-list ps-0">
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Rocket
              img={rocket.flickr_images[0]}
              id={rocket.id}
              type={rocket.rocket_type}
              description={rocket.description}
              name={rocket.rocket_name}
              reserved={rocket.reserved}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Rockets;
