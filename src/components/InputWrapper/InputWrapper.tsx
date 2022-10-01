import { ErrorMessage, Field } from 'formik'
import { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

export default function InputWrapper({
	type,
	name,
	label,
	placeholder,
	setFieldValue,
	values,
}: {
	type: string
	name: string
	label: string
	placeholder: string
	setFieldValue?: any
	values?: {
		name: string
		lastName: string
		email: string
		country: {
			label: string
			value: string
		}
		areaCode: string
		cellphone: string
		password: string
	}
}) {
	const options = useMemo(() => countryList().getData(), [])

	return (
		<div className='input-wrapper'>
			<label
				className='form__label'
				htmlFor={name}
			>
				{label}
			</label>
			{type === 'select' ? (
				<Select
					options={options}
					value={values?.country}
					onChange={value => setFieldValue('country', value)}
				/>
			) : (
				<Field
					className='form__input'
					type={type}
					name={name}
					placeholder={placeholder}
				/>
			)}
			<ErrorMessage name={name} />
		</div>
	)
}
