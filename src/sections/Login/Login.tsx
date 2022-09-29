//import loginIllustration From '../../assets/illustrations/login-illustration.svg'
import loginIllustration from '../../assets/illustrations/login-illustration.svg'
import "./_login.scss"
export default function Login() {
    

    return(
      <div className='coint'>
        <img src={loginIllustration} alt="" />
        <h4>Iniciar sesion</h4>
        <form action="">
            <div>
            <label htmlFor="">correo electronico</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor="">contraseña</label>
            <input type="text" />
            </div>
            <div>
               <label htmlFor=""> <input type="checkbox" />Recordame</label>
               <span>olvide mi contaseña</span>
            </div>
            <button>Ingresar</button>
            <button>Ingresar con Google</button>
        </form>
      </div>
    )
}