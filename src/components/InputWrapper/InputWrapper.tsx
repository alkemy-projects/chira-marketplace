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
			{type === 'select' ? (
				<Field
					className='form__input form__select'
					as={type}
					name={name}
					placeholder={placeholder}
				>
					<option
						className='form__option'
						value='Argentina'
					>
						Argentina
					</option>
					<option
						className='form__option'
						value='Colombia'
					>
						Colombia
					</option>
					<option
						className='form__option'
						value='Mexico'
					>
						México
					</option>
				</Field>
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
