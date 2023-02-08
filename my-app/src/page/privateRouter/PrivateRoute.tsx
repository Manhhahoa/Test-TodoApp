import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../redux/Hook"
import { RootState } from "../../redux/Store"

function PrivateRoute({ children }: any) {
    const user = useAppSelector((state: RootState) => state.user)
    if (!user.username) {
        return <Navigate to='/sign-in'></Navigate>
    }
    return children
}

export default PrivateRoute
