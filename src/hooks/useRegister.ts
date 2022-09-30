import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase'

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
	const handleSubmit = async (values: Values) => {
		console.log(values)
		try {
			const docRef = await addDoc(collection(db, 'users'), {
				...values,
			})
			console.log('Document written with ID: ', docRef.id)
		} catch (e) {
			console.error('Error adding document: ', e)
		}
	}

	return { handleSubmit }
}
