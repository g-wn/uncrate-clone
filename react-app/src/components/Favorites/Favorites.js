import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFavorites } from "../../store/favorites";

const Favorites = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(getFavorites(id))
    }, [dispatch, id])

    return (
        <>
        <h1>hello fam</h1>
        {dispatch(getFavorites(user.id))}
        </>
    )
}

export default Favorites;