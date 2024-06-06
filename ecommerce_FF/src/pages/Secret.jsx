import  { useState } from 'react'
import { useAuthContext } from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { createItemServices } from '../services/itemServices'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



const Secret = () => {
    const {userPayload} = useAuthContext()
    const token = localStorage.getItem('token')

    const [show,setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const{
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) =>{
        try{
           const response = await createItemServices(data,token) 
           if (response.status === 201) {
            console.log(response)
            reset()
            handleShow()
          }
        } catch(error){
            console.log('error', error.message)
        }
    }
  return (
    <>
    {userPayload?.role === 'ADMIN'
      ? <h2>Hola Admin</h2>
      : <h2>Hola Customer</h2>}

    {/*      <Button className='nextButton' onClick={handleShow}>
      Open Modal
    </Button> */}

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Notification</Modal.Title>
      </Modal.Header>
      <Modal.Body>Product added</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>

      </Modal.Footer>
    </Modal>

    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <img className='mb-4' src={Logo} alt='' width='72' height='57' /> */}
        <h1 className='h3 mb-3 fw-normal'>Añadir un producto</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            placeholder='Product Name'
            {...register('name', { required: true })}
          />
          <label htmlFor='name'>Nombre del producto</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='description'
            name='description'
            placeholder='Product Description'
            {...register('description', { required: true })}
          />
          <label htmlFor='description'>Añade un descripción</label>
        </div>

        <div className='form-floating'>
          <input
            type='number'
            className='form-control'
            id='price'
            name='price'
            placeholder='0'
            {...register('price', { required: true })}
          />
          <label htmlFor='price'>Ingresa el precio</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='category'
            name='category'
            {...register('category', { required: true })}
          >
            <option value=''>Elige...</option>
            <option value='Electrónica'>Electrónica</option>
            <option value='Moda y Accesorios'>Moda y Accesorios</option>
            <option value='Belleza y Cuidado Personal'>Belleza y Cuidado Personal</option>
            <option value='Hogar y Cocina'>Hogar y Cocina</option>
            <option value='Deportes'>Deportes</option>
            <option value='Salud y Bienestar'>Salud y Bienestar</option>
            <option value='Automotriz'>Automotriz</option>
            <option value='Mascotas'>Mascotas</option>
            <option value='Alimentos y Bebidas'>Alimentos y Bebidas</option>
            <option value='Libros y Papelería'>Libros y Papelería</option>


          </select>
          <label htmlFor='category'>Categoría</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='image'
            name='image'
            placeholder='0'
            {...register('image', { required: true })}
          />
          <label htmlFor='image'>Image URL</label>
        </div>

        <div className='form-floating'>
          <input
            type='number'
            className='form-control'
            id='stock'
            name='stock'
            placeholder='0'
            {...register('stock', { required: true })}
          />
          <label htmlFor='stock'>En stock:</label>
        </div>


        <button
          className='w-100 btn btn-lg btn-primary'
          type='submit'

        >
          Add
        </button>

      </form>
    </main>
  </>
  )
}

export default Secret