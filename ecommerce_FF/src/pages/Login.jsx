import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { logInUserServices } from "../services/userServices"
import { useAuthContext } from "../hooks/useAuth"

import '../styles/form.css'

const Login = () => {
    const { login } = useAuthContext()
    const navigate = useNavigate()
  
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm()
  
    const onSubmit = async (data) => {
      try {
        const response = await logInUserServices(data)
        if (response.status === 200) {
          login(response.data.token)
          console.log(response.data)
          navigate('/profile')
        }
      } catch (error) {
        console.log('error', error.message)
      }
    }
  
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='h3 mb-3 fw-normal pt-5 text-center text-bold'>Login</h1>
        <div className='form-floating mt-5'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        {errors.email && <span className='text-name'>This field is required</span>}

        <div className='form-floating pb-5'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        {errors.password && <span className='text-name'>This field is required</span>}

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© FullStackFushion</p>
      </form>
    </main>

  )
}

export default Login