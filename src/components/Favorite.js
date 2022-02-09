
import { petFavoriteIncrement, petFavoriteDecrement } from "../actions";
import { useSelector, useDispatch } from "react-redux";



export const Favorite = () => {
    const petCounter = useSelector((state) => state.petCounter)
    const petFavorite = useSelector((state) => state.petFavorite)
    const dispatch = useDispatch()

    return (
        <>
            <p>Number of Pets: {petCounter}</p>
            <button onClick = {(() => dispatch(petFavoriteIncrement()))}>Add Favorite</button>
            <button onClick = {(() => dispatch(petFavoriteDecrement()))}>Remove Favorite</button>
            <p>Number of Pets Favorite: {petFavorite}</p>

        </>
    )

}

export default Favorite;
