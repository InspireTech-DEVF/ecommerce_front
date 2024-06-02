import { useNavigate } from 'react-router-dom'
import { loginUserServices } from './services/useServices'
import { useForm } from 'react-hook-form'
import { useAuthContext } from './hooks/useAuth'
import './styles/form.css'

function Login () {
  const { login } = useAuthContext()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserServices(data)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/carrito')
      }
      console.log('response', response)
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='h3 mb-3 fw-normal'>Please login</h1>

        <div className='form-floating'>
          <input
            type='email'
            name='email'
            className='form-control'
            id='floatingInput'
            {...register('email', { required: true })}
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        {errors.email && <span className='text-danger'>This field is required</span>}

        <div className='form-floating'>
          <input
            type='password'
            name='password'
            className='form-control'
            id='floatingPassword'
            {...register('password', { required: true })}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>
        {errors.password && <span className='text-danger'>This field is required</span>}

        <button className='btn btn-primary w-100 py-2' type='submit'>Login</button>
        <p className='mt-5 mb-3 text-body-secondary'>© Proyecto FullStack DevF 28-web-a "FullStack Fushion"</p>
      </form>
    </main>
  )
}

export default Login
