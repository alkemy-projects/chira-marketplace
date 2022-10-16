import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { startLoader, completeProgressLoader } from '../slicers/loaderSlice'
import Swal from 'sweetalert2'

interface Values {
	email: string
	password: string
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
			Swal.fire('Email o contraseña incorrectos!')
		}
	}

	return { handleSubmit }
}
