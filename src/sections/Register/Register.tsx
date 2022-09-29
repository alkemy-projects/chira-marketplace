import shoppingCartIllustration from '../../assets/illustrations/shopping-cart.svg'
import { Form, Formik } from 'formik'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import * as Yup from 'yup'

export default function Register() {
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
						firstName: '',
						lastName: '',
						email: '',
					}}
					validationSchema={Yup.object({
						firstName: Yup.string()
							.max(15, 'Must be 15 characters or less')
							.required('Required'),
						lastName: Yup.string()
							.max(20, 'Must be 20 characters or less')
							.required('Required'),
						email: Yup.string()
							.email('Invalid email address')
							.required('Required'),
					})}
					onSubmit={values => alert(JSON.stringify(values, null, 2))}
				>
					<Form className='form'>
						<InputWrapper
							type='text'
							name='name'
							label='Nombre/s'
							placeholder='Juan'
						/>
						<InputWrapper
							type='text'
							name='lastName'
							label='Apellido/s'
							placeholder='Hernandez'
						/>
						<InputWrapper
							type='email'
							name='email'
							label='Correo electrónico'
							placeholder='juanhernandez@gmail.com'
						/>
						{/* <InputWrapper type='radio' name='country' label="País" placeholder='Seleccionar' /> */}
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
						<InputWrapper
							type='password'
							name='password'
							label='Contraseña'
							placeholder='Elige una contraseña entre 6 y 20 caracteres'
						/>

						<button type='submit'>Submit</button>
					</Form>
				</Formik>
			</div>
		</section>
	)
}
