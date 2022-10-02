import db from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { startLoader, completeProgressLoader } from '../slicers/loaderSlice'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"


interface Values {
    email: string,
    password: string,
}

export const useLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (values: Values) => {
        dispatch(startLoader())
        const auth = getAuth()
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password)
            dispatch(completeProgressLoader())
            navigate('/')
        } catch (e) {
            dispatch(completeProgressLoader())
            Swal.fire(
                "Ha ocurrido un error" + e
            )
        }





    }

    return { handleSubmit }
}