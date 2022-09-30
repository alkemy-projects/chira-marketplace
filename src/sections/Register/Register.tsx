import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import shoppingCartIllustration from '../../assets/illustrations/shopping-cart.svg'
import googleIcon from '../../assets/icons/google-icon.svg'
import { useGoogleSignIn } from '../../hooks/useGoogleSignIn'
import { useRegister } from '../../hooks/useRegister'

export default function Register() {
	const { signInWithGoogle, desloguear } = useGoogleSignIn()
	const { handleSubmit } = useRegister()

	return (
		<section className='register'>
			<div className='left'>
				<header className='register-header'>
					<h1 className='register__title'>Chira</h1>
					<h2 className='register__description'>
						Crea tu usuario y empieza a explorar todos nuestros productos.
					</h2>
					<p className='register__benefits'>
						¡Tienen envios gratis y es 100% online!
					</p>
				</header>
				<img
					className='register__illustration'
					src={shoppingCartIllustration}
					alt='Ilustración de un carrito de compras online'
				/>
			</div>
			<div className='right'>
				<h2 className='right__title'>Registrarme</h2>
				<Formik
					initialValues={{
						name: '',
						lastName: '',
						email: '',
						country: {
							label: '',
							value: '',
						},
						areaCode: '',
						cellphone: '',
						password: '',
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.max(15, 'Debe contener 15 caracteres o menos')
							.matches(/^[a-zA-Z]+$/, 'Solo se permiten letras')
							.required('Requerido'),
						lastName: Yup.string()
							.max(20, 'Debe contener 20 caracteres o menos')
							.matches(/^[a-zA-Z]+$/, 'Solo se permiten letras')
							.required('Requerido'),
						email: Yup.string()
							.email('Correo electrónico inválido')
							.required('Requerido'),
						country: Yup.object().required('Requerido'),
						areaCode: Yup.string().required('Requerido'),
						cellphone: Yup.string()
							.min(10, 'Debe contener 10 caracteres')
							.max(10, 'Debe contener menos de 11 caracteres')
							.matches(/^[0-9]+$/, 'Solo se permiten números')
							.required('Requerido'),
						password: Yup.string()
							.max(20, 'Debe contener 20 caracteres o menos')
							.min(6, 'Debe contener 6 caracteres o mas')
							.required('Requerido'),
					})}
					onSubmit={values => handleSubmit(values)}
				>
					{({ values, setFieldValue }) => (
						<Form className='form'>
							<div className='row-1'>
								<InputWrapper
									type='text'
									name='name'
									label='Nombre'
									placeholder='Juan'
								/>
								<InputWrapper
									type='text'
									name='lastName'
									label='Apellido'
									placeholder='Hernandez'
								/>
							</div>
							<div className='row-2'>
								<InputWrapper
									type='email'
									name='email'
									label='Correo electrónico'
									placeholder='juanhernandez@gmail.com'
								/>
							</div>
							<div className='row-3'>
								<InputWrapper
									type='select'
									name='country'
									label='País'
									placeholder='Seleccionar'
									values={values}
									setFieldValue={setFieldValue}
								/>

								<InputWrapper
									type='text'
									name='areaCode'
									label='C. Área'
									placeholder='+54'
								/>
								<InputWrapper
									type='text'
									name='cellphone'
									label='Celular'
									placeholder='1128034977'
								/>
							</div>
							<div className='row-4'>
								<InputWrapper
									type='password'
									name='password'
									label='Contraseña'
									placeholder='Elige una contraseña entre 6 y 20 caracteres'
								/>
							</div>
							<button
								className='form__submit'
								type='submit'
							>
								Registrarse
							</button>
							<button
								className='google-register'
								onClick={() => signInWithGoogle()}
								type='button'
							>
								<img
									src={googleIcon}
									alt='Ícono de Google'
								/>
								<span>Registrarse con Google</span>
							</button>
							<button onClick={() => desloguear()}>Desloguear</button>
						</Form>
					)}
				</Formik>
			</div>
		</section>
	)
}
