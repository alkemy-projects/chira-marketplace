import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { startLoader, completeProgressLoader } from '../slicers/loaderSlice'
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'

interface Values {
	name?: string
	lastName?: string
	email: string
	country?: {
		label: string
		value: string
	}
	areaCode?: string
	cellphone?: string
	password: string
}

export const useRegister = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = async (values: Values) => {
		dispatch(startLoader())
		console.log(values)
		const auth = getAuth()
		const { email, password } = values
		try {
			await createUserWithEmailAndPassword(auth, email, password)
			dispatch(completeProgressLoader())
			navigate('/login')
		} catch (e) {
			dispatch(completeProgressLoader())
			console.error('Error adding document: ', e)
			fireSweetAlert('Ha ocurrido un error inesperado', e)
		}
	}

	const fireSweetAlert = (title: string, text: any) => {
		Swal.fire({
			title: title,
			text: text,
			confirmButtonColor: '#1E5128',
		})
	}

	return { handleSubmit }
}
