import { Formik, Form, ErrorMessage } from 'formik'
import loginIllustratio from '../../assets/illustrations/loginIllustration.svg'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import googleIcon from "../../assets/icons/google-icon.svg"
import  {useLogin}  from '../../hooks/useLogin'
import { useGoogleSignIn } from '../../hooks/useGoogleSignIn'
import * as Yup from 'yup'
import { valueContainerCSS } from 'react-select/dist/declarations/src/components/containers'


export default function Login() {
  const { handleSubmit } = useLogin()
  const { signInWithGoogle } = useGoogleSignIn()

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
       

        validationSchema = {Yup.object({
          email: Yup.string().email('Correo electrónico inválido').required("este campo es obligatorio"),
          password: Yup.string().min(4, "La contraseña debe tener al menos 6 caracteres")
          .max(20, "la contraseña debe tener menos de 20 caracteres")
          .required("este campo es obligatorio")
         })}

         onSubmit={values => handleSubmit(values)}

      >
         {({ errors, touched }) =>(
        <Form className='form-log'>
          <h2>Iniciar sesion</h2>
          
          <InputWrapper
            type='text'
            name='email'
            label='correo electronico'
            placeholder='juan@ejemplo.com'
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
          <button className='Sign-in-google' type='submit' onClick={()=> signInWithGoogle()}>
            <div>
              <img src={googleIcon} alt="" className='googleIcon' /></div>
            <div className='gspan'><span> Ingresar con Google</span></div>
          </button>
        </Form>
        )}


      </Formik>
      
    </div>

  )
}