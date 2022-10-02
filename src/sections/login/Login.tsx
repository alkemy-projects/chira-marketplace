import { Formik, Form } from 'formik'
import loginIllustratio from '../../assets/illustrations/loginIllustration.svg'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import googleIcon from "../../assets/icons/google-icon.svg"
import  {useLogin}  from '../../hooks/useLogin'


export default function Login() {
  const { handleSubmit } = useLogin()
  return (
    <div className='cont'>

      <div className='left-cont'>
        <h1>Chira</h1>
        <img src={loginIllustratio} alt="" />
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => handleSubmit(values)}
      >
        <Form className='form-log'>
          <h2>Iniciar sesion</h2>
          <InputWrapper
            type='text'
            name='email'
            label='correo electronico'
            placeholder='Juan'
          />
          <InputWrapper
            type='password'
            name='password'
            label='contraseña'
            placeholder='contraseña'
          />
          <div className='cont2'>

            <label className='lab'> <input type="checkbox" />recuerdame</label>
            <p>Olvide mi contraseña</p>

          </div>

          <button className='Sign-in' type='submit'>Ingresar</button>
          <button className='Sign-in-google' type='submit'>
            <div>
              <img src={googleIcon} alt="" className='googleIcon' /></div>
            <div className='gspan'><span> Ingresar con Google</span></div>
          </button>
        </Form>


      </Formik>
    </div>

  )
}