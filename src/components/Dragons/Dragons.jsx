// React hooks
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Thunk Action creators
import { fetchDragons } from '../../Redux/dragons/dragons';

// Component
import DragonItem from './DragonItem';

const Dragons = () => {
  const dragons = useSelector(state => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, []);

  return (
    <div className="container" style={{ border: 'none' }}>
      <ul className="dragons-list ps-0">
        {
          dragons.map((dragon) => (
            <DragonItem
              key={dragon.id}
              id={dragon.id}
              name={dragon.name}
              type={dragon.type}
              description={dragon.description}
              reserved={dragon.reserved}
              img={dragon.flickr_images[0]}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Dragons;
