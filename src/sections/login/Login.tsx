import { Formik, Form } from 'formik'
import { useGoogleSignIn } from '../../hooks/useGoogleSignIn'
import { useLogin } from '../../hooks/useLogin'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import loginIllustratio from '../../assets/illustrations/loginIllustration.svg'
import googleIcon from '../../assets/icons/google-icon.svg'
import * as Yup from 'yup'

export default function Login() {
	const { handleSubmit } = useLogin()
	const { signInWithGoogle } = useGoogleSignIn()

	return (
		<div className='cont'>
			<div className='left-cont'>
				<h1>Chira</h1>
				<img
					src={loginIllustratio}
					alt=''
				/>
			</div>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.email('Correo electrónico inválido')
						.required('requerido'),
					password: Yup.string()
						.min(4, 'La contraseña debe tener al menos 6 caracteres')
						.max(20, 'la contraseña debe tener menos de 20 caracteres')
						.required('requerido'),
				})}
				onSubmit={values => handleSubmit(values)}
			>
				<Form className='form-log'>
					<h2>Iniciar sesion</h2>
					<div className='log-input'>
						<InputWrapper
							type='text'
							name='email'
							label='correo electronico'
							placeholder='juan@ejemplo.com'
						/>
					</div>
					<div className='log-input'>
						<InputWrapper
							type='password'
							name='password'
							label='contraseña'
							placeholder='contraseña'
						/>
					</div>
					<div className='cont2'>
						<label className='lab'>
							{' '}
							<input type='checkbox' />
							recuerdame
						</label>
						<p>Olvide mi contraseña</p>
					</div>
					<button
						className='Sign-in'
						type='submit'
					>
						Ingresar
					</button>
					<button
						className='Sign-in-google'
						type='submit'
						onClick={() => signInWithGoogle()}
					>
						<div>
							<img
								src={googleIcon}
								alt=''
								className='googleIcon'
							/>
						</div>
						<div className='gspan'>
							<span> Ingresar con Google</span>
						</div>
					</button>
				</Form>
			</Formik>
		</div>
	)
}