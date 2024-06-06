import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { registerUserServices } from "../services/userServices"
import '../styles/form.css'

const Signup = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        //watch,
        formState: { errors }
      } = useForm()

      const onSubmit = async (data) =>{
          try{
            const response = await registerUserServices(data)
            if(response.status === 201 ){
                navigate('/login')
            }
        }catch(error){
            console.log('error', error.message)
        }  
        console.log(data)
      }

  return (
    <main className='form-signin w-100 m-auto'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className='h3 mb-3 fw-normal text-center py-3'>Registro</h1>

      <div className='form-floating mb-5'>
        <input
          type='email'
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id='email'
          name='email'
          placeholder='name@example.com'
          {...register('email', { required: 'El correo electrónico es obligatorio' })}
        />
        <label htmlFor='email'>Correo electrónico</label>
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      <div className='form-floating mb-5'>
        <input
          type='password'
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          id='password'
          name='password'
          placeholder='Password'
          {...register('password', { required: 'La contraseña es obligatoria' })}
        />
        <label htmlFor='password'>Contraseña</label>
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      <div className='form-floating mb-5'>
        <input
          type='text'
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id='name'
          name='name'
          placeholder='John'
          {...register('name', { required: 'El nombre es obligatorio' })}
        />
        <label htmlFor='name'>Nombre</label>
        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
      </div>

      <div className='form-floating mb-5'>
        <input
          type='text'
          className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
          id='last_name'
          name='last_name'
          placeholder='Doe'
          {...register('last_name', { required: 'El apellido es obligatorio' })}
        />
        <label htmlFor='last_name'>Apellido</label>
        {errors.last_name && <div className="invalid-feedback">{errors.last_name.message}</div>}
      </div>

      <button className='w-100 btn btn-lg btn-primary mt-3' type='submit'>Registro</button>
      <p className='mt-5 mb-3 text-muted'>© FullStackFushion</p>
    </form>
  </main>
  )
}

export default Signup