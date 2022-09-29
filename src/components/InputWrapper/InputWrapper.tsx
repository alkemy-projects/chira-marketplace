import { ErrorMessage, Field } from 'formik'

export default function InputWrapper({
	type,
	name,
	label,
	placeholder,
}: {
	type: string
	name: string
	label: string
	placeholder: string
}) {
	return (
		<div className='input-wrapper'>
			<label
				className='form__label'
				htmlFor={name}
			>
				{label}
			</label>
			<Field
				className='form__input'
				type={type}
				name={name}
				placeholder={placeholder}
			/>
			<ErrorMessage name={name} />
		</div>
	)
}
