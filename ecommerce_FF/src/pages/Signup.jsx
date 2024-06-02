import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerUserServices } from './services/useServices'

function Signup () {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserServices(data)
      if (response.status === 201) {
        navigate('/login')
      }
      console.log('response', response)
    } catch (error) {
      console.log('error', error.message)
    }
  }

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            {...register('first_name', { required: true })}
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            {...register('last_name', { required: true })}
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            {...register('email', { required: true })}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            {...register('password', { required: true })}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© Proyecto FullStack DevF 28-web-a "FullStack Fushion"</p>
      </form>
    </main>
  )
}

export default Signup
