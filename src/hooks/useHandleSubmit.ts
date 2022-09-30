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

export const useHandleSubmit = () => {
	const handleSubmit = (values: Values) => {
		console.log(values)
	}

	return { handleSubmit }
}
