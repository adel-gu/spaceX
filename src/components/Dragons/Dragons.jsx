// React hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Thunk Action creators
import { fetchDragons } from "../../redux/dragons/dragons";

// Component
import DragonItem from "./DragonItem";

const Dragons = () => {
  const dragons = useSelector(state => state.dragons.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons())
  }, [])

  return(
    <ul className="dragons-list">
      {
        dragons.map((dragon) => (
          <DragonItem 
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            description={dragon.description}
            img={dragon.flickr_images}
          />
        ))
      }
    </ul>
  )
}

export default Dragons;