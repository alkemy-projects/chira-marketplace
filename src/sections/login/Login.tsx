import { Formik, Form } from 'formik'
import loginIllustratio from '../../assets/illustrations/loginIllustration.svg'
import InputWrapper from '../../components/InputWrapper/InputWrapper'
import "./_login.scss"


export default function Login() {

  return (
    <div className='cont'>

      <div ><img src={loginIllustratio} alt="" /></div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
      >
        <Form className='form'>
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

          <button>Ingresar</button>
          <button>Ingresar con Google</button>
        </Form>


      </Formik>
    </div>

  )
}