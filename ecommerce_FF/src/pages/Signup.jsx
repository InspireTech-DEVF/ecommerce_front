import { useNavigate } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { registerUserServices } from "../services/userServices"
import '../styles/form.css'
import Logo from '../assets/icon.svg'

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
      <h1 className='h3 mb-3 fw-normal'>Registro</h1>

      <div className='form-floating'>
        <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          placeholder='name@example.com'
          {...register('email', { required: true })}
        />
        <label htmlFor='email'>Correo electrónico</label>
      </div>

      <div className='form-floating'>
        <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          placeholder='Password'
          {...register('password', { required: true })}
        />
        <label htmlFor='password'>Contraseña</label>
      </div>

      <div className='form-floating'>
        <input
          type='text'
          className='form-control'
          id='name'
          name='name'
          placeholder='John'
          {...register('name', { required: true })}
        />
        <label htmlFor='name'>Nombre</label>
      </div>

      <div className='form-floating'>
        <input
          type='text'
          className='form-control'
          id='last_name'
          name='last_name'
          placeholder='Doe'
          {...register('last_name', { required: true })}

        />
        <label htmlFor='last_name'>Apellido</label>
      </div>
{/* {
      <div className='form-floating'>
          <select
            className='form-select'
            id='role'
            name='role'
            {...register('role', { required: true })}
          >
            <option value=''>Choose...</option>
            <option value='ADMIN'>Admin</option>
            <option value='CUSTOMER'>Cliente</option>
          </select>
          <label htmlFor='role'>Rol</label>
        </div> } */}

     {/*    <div className='form-floating'>
        <input
          type='text'
          className='form-control'
          id='isActive'
          name='isActive'
          placeholder='true'
          {...register('isActive', { required: true })}

        />
        <label htmlFor='isActive'>Is active?</label>
      </div> */}


      <button className='w-100 btn btn-lg btn-primary' ty pe='submit'>Registro</button>
      <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
    </form>
  </main>
  )
}

export default Signup