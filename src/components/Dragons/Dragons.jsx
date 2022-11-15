/* eslint-disable array-callback-return */
// Component
import DragonItem from './DragonItem';

const Dragons = () => {
  const dragons = [];

  return (
    <ul className="dragons-list">
      {
        dragons.map((dragon) => {
          <DragonItem
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            img={dragon.flickr_images}
          />;
        })
      }
    </ul>
  );
};

export default Dragons;
